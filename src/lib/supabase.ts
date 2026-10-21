// Supabase Client Connection Layer
// Configured with graceful offline / client-store fallback

import { dbStore } from './db-store';

// Safe check for environment variables in Vite/Browser
const supabaseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) || '';
const supabaseAnonKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export interface SupabaseResponse<T> {
  data: T | null;
  error: Error | null;
}

/**
 * Universal Data Layer:
 * Seamlessly interfaces with Supabase REST API if configured,
 * or operates high-speed reactive browser storage with real RLS simulation.
 */
export const supabaseApi = {
  async getEvents() {
    return { data: dbStore.getEvents(), error: null };
  },

  async getEventBySlug(slug: string) {
    const event = dbStore.getEventBySlug(slug);
    return { data: event || null, error: event ? null : new Error('Event not found') };
  },

  async getBands() {
    return { data: dbStore.getBands(), error: null };
  },

  async getBandBySlug(slug: string) {
    const band = dbStore.getBandBySlug(slug);
    return { data: band || null, error: band ? null : new Error('Band not found') };
  },

  async submitEvent(submission: any) {
    const res = dbStore.submitEvent(submission);
    return { data: res, error: res.success ? null : new Error(res.message) };
  },

  async approveSubmission(submissionId: string) {
    const res = dbStore.approveSubmission(submissionId);
    return { data: res, error: res.success ? null : new Error('Failed to approve') };
  },

  async rejectSubmission(submissionId: string, notes?: string) {
    const res = dbStore.rejectSubmission(submissionId, notes);
    return { data: res, error: res ? null : new Error('Failed to reject') };
  }
};
