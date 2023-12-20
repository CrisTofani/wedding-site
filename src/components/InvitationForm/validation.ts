import * as Yup from "yup";
import { ConditionBoolean, GuestMenu } from "../../utils/types/guest";
const REQUIRED_MESSAGE = "Il campo è obbligatorio";

export const InvitationSchema = Yup.object().shape({
  partecipation: Yup.string<ConditionBoolean>().required(REQUIRED_MESSAGE),
  contact: Yup.string().when("partecipation", {
    is: "Y",
    then: (schema) => schema.required(REQUIRED_MESSAGE),
    otherwise: (schema) => schema.notRequired().ensure(),
  }),
  partecipants: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED_MESSAGE)
          .min(4, "Nome troppo corto"),
        menu: Yup.string<GuestMenu>().required(REQUIRED_MESSAGE),
        notes: Yup.string().min(5, "Le note sembrano troppo corte"),
      })
    )
    .min(1, "Devi inserire almeno un partecipante"),
});
