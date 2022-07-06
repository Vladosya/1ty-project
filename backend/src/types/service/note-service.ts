export interface INoteCreate {
    note_id: string;
    note_message: string;
    date_create: string;
    is_readed: boolean;
    date_read: boolean | null;
}

export interface INoteGet {
    note_id: string;
    note_message: string;
    date_create: string;
    is_readed: boolean;
    date_read: boolean | null;
}
