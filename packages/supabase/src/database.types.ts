export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            catalogue_leads: {
                Row: {
                    id: string
                    created_at: string
                    full_name: string
                    email: string
                    phone: string
                }
                Insert: {
                    id?: string
                    created_at?: string
                    full_name: string
                    email: string
                    phone: string
                }
                Update: Partial<{
                    full_name: string
                    email: string
                    phone: string
                }>
                Relationships: []
            }
            industries: {
                Row: {
                    id: string
                    created_at: string
                    name: string
                    slug: string
                    description: string
                    stats: Json[]
                    display_order: number
                    image_url: any
                    cover_image_url: any
                    seo_metadata: Json
                }
                Insert: any
                Update: any
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}