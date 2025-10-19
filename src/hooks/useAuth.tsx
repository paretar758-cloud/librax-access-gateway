import { useState, useEffect, useRef } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { getUserRole } from "@/lib/supabase";

// Cache role to avoid redundant API calls
const roleCache = new Map<string, string>();

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const roleLoadingRef = useRef(false);

  const loadRole = async (userId: string) => {
    // Check cache first
    if (roleCache.has(userId)) {
      setRole(roleCache.get(userId)!);
      return;
    }

    // Prevent duplicate calls
    if (roleLoadingRef.current) return;
    
    roleLoadingRef.current = true;
    try {
      const userRole = await getUserRole(userId);
      if (userRole) {
        roleCache.set(userId, userRole);
        setRole(userRole);
      }
    } finally {
      roleLoadingRef.current = false;
    }
  };

  useEffect(() => {
    // Check for existing session first
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        loadRole(session.user.id);
      }
      setLoading(false);
    });

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          loadRole(session.user.id);
        } else {
          setRole(null);
        }
        
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return { user, session, role, loading };
};
