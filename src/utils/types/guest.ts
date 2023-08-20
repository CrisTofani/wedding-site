export type GuestMenu = "standard" | "child" | "vegetarian";
export type GuestType = "adult" | "child" | "baby";
export type InvitationType = "with_companion" | "no_companion";

export interface Guest {
  id: string;
  invitation: InvitationType;
  name: string;
  surname: string;
  phone: string;
  partecipation: boolean;
  type: GuestType;
  menu: GuestMenu;
  companions: Guest[];
}
