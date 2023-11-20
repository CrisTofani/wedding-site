export type GuestMenu = "standard" | "child" | "vegetarian" | "celiac";
export type ConditionBoolean = "Y" | "N";

export interface Invitation {
  id: string;
  can_add: ConditionBoolean;
  contact: string;
  partecipation: ConditionBoolean;
  partecipants: Guest[];
}

export interface Guest {
  name: string;
  menu: GuestMenu;
  notes: string;
}
