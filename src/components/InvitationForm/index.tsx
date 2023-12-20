import React from "react";
import {
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/CloseRounded";
import Person from "@mui/icons-material/PersonAddRounded";
import { Form } from "react-router-dom";
import "./index.css";
import { FieldArray, Formik, FormikErrors } from "formik";
import { Guest, GuestMenu, Invitation } from "../../utils/types/guest";
import { updateInvitation } from "../../services/api";
import { InvitationSchema } from "./validation";

const emptyPartecipant = {
  name: "",
  menu: "standard" as GuestMenu,
  notes: "",
};

type Props = {
  id: string;
  invitation: Invitation;
};

type FormValues = Omit<Invitation, "can_add">;

const isNotEmptyString = (value: string) => value.trim() !== "";

const undefinedToEmptyString = (value: string | undefined) =>
  value ? value : "";

const InvitationForm = ({ id, invitation }: Props) => {
  const theme = useTheme();
  const labelColor = { color: theme.palette.primary.main };
  const errorColor = { color: theme.palette.error.main };

  const [showError, setShowError] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const handleSubmit = (values: FormValues) => {
    console.log("/*** Form Submitted ***/", values);
    const convertedValues = {
      ...values,
      partecipants: values.partecipants.map((p) => ({
        ...p,
        notes: undefinedToEmptyString(p.notes),
      })),
    };
    setSubmitting(true);
    updateInvitation(id, convertedValues as Invitation)
      .then((_) => {
        setSubmitting(false);
        if (values.partecipation === "N") {
          window.location.href = "/thank-you-ko";
          return;
        }
        window.location.href = "/thank-you";
        return;
      })
      .catch((_) => {
        setSubmitting(false);
        alert("Si è verificato un errore, riprova!");
      });
  };

  return (
    <Form
      className="invitation-form"
      style={{ backgroundColor: "rgb(241, 243, 244)" }}
    >
      <Container disableGutters={useMediaQuery(theme.breakpoints.only("xs"))}>
        <Formik
          initialValues={
            {
              partecipation: isNotEmptyString(invitation.partecipation)
                ? invitation.partecipation
                : undefined,
              contact: isNotEmptyString(invitation.contact)
                ? invitation.contact
                : undefined,
              partecipants: invitation.partecipants.map(
                ({ name, menu, notes }) => ({
                  name,
                  menu,
                  notes: isNotEmptyString(notes) ? notes : undefined,
                })
              ),
            } as FormValues
          }
          validateOnChange
          onSubmit={handleSubmit}
          validationSchema={InvitationSchema}
        >
          {({ values, setFieldValue, errors, isValid }) => (
            <>
              <Grid
                container
                direction="row"
                columns={3}
                spacing={4}
                justifyContent="flex-start"
                alignItems="flex-end"
              >
                <Grid
                  item
                  container
                  direction="row"
                  xs={12}
                  sm={12}
                  justifyContent="flex-start"
                  alignItems="flex-end"
                >
                  <Typography variant={"h5"} sx={{ ...labelColor }}>
                    Ciao
                  </Typography>
                  <Typography
                    variant={"h4"}
                    sx={{
                      ...labelColor,
                      marginLeft: "8px",
                      fontFamily: "Muli",
                      fontStyle: "bold",
                    }}
                  >
                    {values.partecipants[0].name.split(" ")[0] || "Dario"}
                  </Typography>
                  <Typography variant={"h4"} sx={{ ...labelColor }}>
                    ,
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sm={3}
                  style={{ paddingTop: "0", paddingBottom: "32px" }}
                >
                  <Typography variant={"h5"} sx={{ ...labelColor }}>
                    siamo felici di invitarti al nostro matrimonio!
                  </Typography>
                  <Typography variant={"h5"} sx={{ ...labelColor }}>
                    usa il form qui sotto per confermare la tua presenza.
                  </Typography>
                </Grid>
              </Grid>
              <FieldArray name="partecipants">
                {({ remove, push }) => (
                  <Grid
                    container
                    direction="row"
                    columns={3}
                    spacing={4}
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Grid item xs={12} sm={12}>
                      <Paper elevation={2} sx={{ padding: "24px" }}>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          sx={{ paddingBottom: "16px" }}
                        >
                          <RadioGroup
                            aria-labelledby="partecipation-radio-buttons"
                            name="partecipation-buttons-group"
                            value={values.partecipation}
                            onChange={(e) =>
                              setFieldValue(`partecipation`, e.target.value)
                            }
                            row
                          >
                            <FormControlLabel
                              value={"Y"}
                              control={<Radio />}
                              label={`Ci ${
                                values.partecipants.length > 1
                                  ? "saremo"
                                  : "sarò"
                              }! ❤️`}
                              sx={{ marginRight: "32px" }}
                            />
                            <FormControlLabel
                              value="N"
                              control={<Radio />}
                              label={`Non ci ${
                                values.partecipants.length > 1
                                  ? "saremo"
                                  : "sarò"
                              } 💔`}
                            />
                          </RadioGroup>
                          {errors.partecipation && showError && (
                            <Typography
                              variant={"body2"}
                              sx={{ ...errorColor }}
                            >
                              {errors.partecipation}
                            </Typography>
                          )}
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <FormLabel
                            sx={labelColor}
                            // color="primary"
                            id="contact"
                          >
                            Contatto (Email/Telefono) *
                          </FormLabel>
                          <TextField
                            id="contact"
                            // label="Nome"
                            variant="outlined"
                            sx={labelColor}
                            fullWidth
                            value={values.contact}
                            onChange={(e) =>
                              setFieldValue(`contact`, e.target.value)
                            }
                          />
                          {showError && errors.contact && (
                            <Typography
                              variant={"body2"}
                              sx={{ ...errorColor }}
                            >
                              {errors.contact}
                            </Typography>
                          )}
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          sx={{ paddingBottom: "16px" }}
                        >
                          <FormLabel sx={labelColor} id="menu-select-label">
                            Menù *
                          </FormLabel>
                          <Select
                            labelId="menu-select-label"
                            id="menu-select"
                            value={values.partecipants[0].menu}
                            onChange={(e) =>
                              setFieldValue(
                                `partecipants[0].menu`,
                                e.target.value
                              )
                            }
                            fullWidth
                            disabled={values.partecipation !== "Y"}
                          >
                            <MenuItem value={"standard"}>Mangio tutto</MenuItem>
                            <MenuItem value={"child"}>Bambino</MenuItem>
                            <MenuItem value={"vegetarian"}>
                              Vegetariano
                            </MenuItem>
                            <MenuItem value={"celiac"}>Celiaco</MenuItem>
                          </Select>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <FormLabel
                            sx={labelColor}
                            // color="primary"
                            id="notes-label"
                          >
                            Note (Intolleranze/Allergie etc.)
                          </FormLabel>
                          <TextField
                            id="notes"
                            value={values.partecipants[0].notes}
                            disabled={values.partecipation !== "Y"}
                            onChange={(e) =>
                              setFieldValue(
                                `partecipants[0].notes`,
                                e.target.value
                              )
                            }
                            aria-labelledby="notes-label"
                            variant="outlined"
                            sx={labelColor}
                            fullWidth
                            rows={4}
                            multiline
                          />
                          {showError &&
                            errors.partecipants &&
                            errors.partecipants[0] &&
                            typeof errors.partecipants[0] !== "string" && (
                              <Typography
                                variant={"body2"}
                                sx={{ ...errorColor }}
                              >
                                {errors.partecipants[0].notes}
                              </Typography>
                            )}
                        </Grid>
                      </Paper>
                    </Grid>

                    {values.partecipation === "Y" &&
                      (values.partecipants.length > 1 ||
                        invitation.can_add === "Y") && (
                        <Grid item xs={12} sm={12}>
                          <Typography variant={"body1"} sx={{ ...labelColor }}>
                            Usa il form seguente per aggiungere i dettagli delle
                            persone che verranno con te. <br />
                            Se non ci saranno altre persone oltre a te, usa il
                            pulsante con la X in alto a destra per rimuoverle
                            dall'invito.
                          </Typography>
                          {invitation.can_add === "Y" && (
                            <Typography
                              variant={"body1"}
                              sx={{ ...labelColor }}
                            >
                              Puoi aggiungere un nuovo partecipante cliccando
                              sul pulsante con l'icona della persona in basso a
                              sinistra.
                            </Typography>
                          )}
                        </Grid>
                      )}
                    {values.partecipants.length > 0 &&
                      values.partecipants.map(
                        (p, index) =>
                          index !== 0 && (
                            <>
                              <Grid item xs={12} sm={12}>
                                <Paper elevation={2} sx={{ padding: "24px" }}>
                                  {index > 0 && (
                                    <Grid
                                      item
                                      xs={12}
                                      sm={12}
                                      display={"flex"}
                                      justifyContent={"flex-end"}
                                    >
                                      <Button
                                        variant="text"
                                        color="primary"
                                        onClick={() => remove(index)}
                                      >
                                        <DeleteIcon />
                                      </Button>
                                    </Grid>
                                  )}
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    sx={{ paddingBottom: "16px" }}
                                  >
                                    <FormLabel
                                      sx={labelColor}
                                      // color="primary"
                                      id="name"
                                    >
                                      Nome e Cognome *
                                    </FormLabel>
                                    <TextField
                                      id="name"
                                      variant="outlined"
                                      sx={labelColor}
                                      fullWidth
                                      value={p.name}
                                      onChange={(e) =>
                                        setFieldValue(
                                          `partecipants[${index}].name`,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    sx={{ paddingBottom: "16px" }}
                                  >
                                    <FormLabel
                                      sx={labelColor}
                                      id="menu-select-label"
                                    >
                                      Menù *
                                    </FormLabel>
                                    <Select
                                      labelId="menu-select-label"
                                      id="menu-select"
                                      value={p.menu}
                                      onChange={(e) =>
                                        setFieldValue(
                                          `partecipants[${index}].menu`,
                                          e.target.value
                                        )
                                      }
                                      fullWidth
                                      disabled={values.partecipation !== "Y"}
                                    >
                                      <MenuItem value={"standard"}>
                                        Mangio tutto
                                      </MenuItem>
                                      <MenuItem value={"child"}>
                                        Bambino
                                      </MenuItem>
                                      <MenuItem value={"vegetarian"}>
                                        Vegetariano
                                      </MenuItem>
                                      <MenuItem value={"celiac"}>
                                        Celiaco
                                      </MenuItem>
                                    </Select>
                                  </Grid>
                                  <Grid item xs={12} sm={12}>
                                    <FormLabel
                                      sx={labelColor}
                                      // color="primary"
                                      id="notes-label"
                                    >
                                      Note (Intolleranze/Allergie etc.)
                                    </FormLabel>
                                    <TextField
                                      id="notes"
                                      value={p.notes}
                                      disabled={values.partecipation !== "Y"}
                                      onChange={(e) =>
                                        setFieldValue(
                                          `partecipants[${index}].notes`,
                                          e.target.value
                                        )
                                      }
                                      aria-labelledby="notes-label"
                                      variant="outlined"
                                      sx={labelColor}
                                      fullWidth
                                      rows={4}
                                      multiline
                                    />
                                    {showError &&
                                      errors.partecipants &&
                                      errors.partecipants[index] &&
                                      typeof errors.partecipants[index] !==
                                        "string" && (
                                        <Typography
                                          variant={"body2"}
                                          sx={{ ...errorColor }}
                                        >
                                          {
                                            (
                                              errors.partecipants[
                                                index
                                              ] as FormikErrors<Guest>
                                            ).notes
                                          }
                                        </Typography>
                                      )}
                                  </Grid>
                                </Paper>
                              </Grid>
                            </>
                          )
                      )}
                    {values.partecipation === "Y" &&
                      invitation.can_add === "Y" &&
                      values.partecipants.length < 3 && (
                        <Grid
                          item
                          xs={1}
                          sm={1}
                          display={"flex"}
                          justifyContent={"flex-start"}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => push(emptyPartecipant)}
                            title="Aggiungi partecipante"
                          >
                            <Person />
                          </Button>
                        </Grid>
                      )}
                    <Grid
                      item
                      xs={
                        values.partecipation !== "Y" ||
                        values.partecipants.length > 2 ||
                        invitation.can_add === "N"
                          ? 3
                          : 2
                      }
                      sm={
                        values.partecipation !== "Y" ||
                        values.partecipants.length > 2 ||
                        invitation.can_add === "N"
                          ? 3
                          : 2
                      }
                      display={"flex"}
                      justifyContent={"flex-end"}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          if (!isValid) {
                            setShowError(true);
                            return;
                          }
                          setShowError(false);
                          handleSubmit(values);
                        }}
                        disabled={submitting}
                      >
                        {submitting ? (
                          <CircularProgress color="inherit" />
                        ) : (
                          "Invia risposta"
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                )}
              </FieldArray>
              {/* <Typography
                variant={"body1"}
                sx={{ color: theme.palette.error.main }}
              >
                {JSON.stringify(errors)}
              </Typography> */}
            </>
          )}
        </Formik>
      </Container>
    </Form>
  );
};

export default InvitationForm;
