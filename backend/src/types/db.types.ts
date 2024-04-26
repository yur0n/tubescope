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
      channels: {
        Row: {
          country: string | null
          customUrl: string | null
          description: string | null
          id: string
          publishedAt: string | null
          subscriberCount: number | null
          thumbnail: string | null
          title: string | null
          topicDetails: string[] | null
          videoCount: number | null
          viewCount: number | null
        }
        Insert: {
          country?: string | null
          customUrl?: string | null
          description?: string | null
          id: string
          publishedAt?: string | null
          subscriberCount?: number | null
          thumbnail?: string | null
          title?: string | null
          topicDetails?: string[] | null
          videoCount?: number | null
          viewCount?: number | null
        }
        Update: {
          country?: string | null
          customUrl?: string | null
          description?: string | null
          id?: string
          publishedAt?: string | null
          subscriberCount?: number | null
          thumbnail?: string | null
          title?: string | null
          topicDetails?: string[] | null
          videoCount?: number | null
          viewCount?: number | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          country: string | null
          id: number
          is_authenticated: boolean | null
          text: string | null
          timestamp: string | null
          username: string
        }
        Insert: {
          country?: string | null
          id?: number
          is_authenticated?: boolean | null
          text?: string | null
          timestamp?: string | null
          username: string
        }
        Update: {
          country?: string | null
          id?: number
          is_authenticated?: boolean | null
          text?: string | null
          timestamp?: string | null
          username?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          categoryId: number | null
          channelId: string | null
          channelTitle: string | null
          commentCount: number | null
          description: string | null
          id: string
          likeCount: number | null
          publishedAt: string | null
          thumbnail: string | null
          title: string | null
          topicDetails: string[] | null
          viewCount: number | null
        }
        Insert: {
          categoryId?: number | null
          channelId?: string | null
          channelTitle?: string | null
          commentCount?: number | null
          description?: string | null
          id: string
          likeCount?: number | null
          publishedAt?: string | null
          thumbnail?: string | null
          title?: string | null
          topicDetails?: string[] | null
          viewCount?: number | null
        }
        Update: {
          categoryId?: number | null
          channelId?: string | null
          channelTitle?: string | null
          commentCount?: number | null
          description?: string | null
          id?: string
          likeCount?: number | null
          publishedAt?: string | null
          thumbnail?: string | null
          title?: string | null
          topicDetails?: string[] | null
          viewCount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_videos_channelId_fkey"
            columns: ["channelId"]
            isOneToOne: false
            referencedRelation: "channels"
            referencedColumns: ["id"]
          },
        ]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
