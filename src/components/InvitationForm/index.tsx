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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/CloseRounded";
import Person from "@mui/icons-material/PersonAddRounded";
import { Form } from "react-router-dom";
import "./index.css";
import { FieldArray, Formik } from "formik";

const emptyPartecipant = {
  name: "Dario Patti",
  menu: "standard",
  notes: "",
};

const labelColor = { color: "rgba(89, 109, 78)" };
const InvitationForm = () => {
  const theme = useTheme();

  return (
    <Form
      className="invitation-form"
      style={{ backgroundColor: "rgb(241, 243, 244)" }}
    >
      <Container disableGutters={useMediaQuery(theme.breakpoints.only("xs"))}>
        <Formik
          initialValues={{
            partecipation: "",
            contact: "",
            partecipants: [emptyPartecipant],
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          {({ values, setFieldValue }) => (
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
                        </Grid>
                      </Paper>
                    </Grid>
                    {values.partecipants.length > 0 &&
                      values.partecipants.map(
                        (p, index) =>
                          index !== 0 && (
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
                                    <MenuItem value={"child"}>Bambino</MenuItem>
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
                                </Grid>
                              </Paper>
                            </Grid>
                          )
                      )}
                    {values.partecipation === "Y" &&
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
                          >
                            <Person />
                          </Button>
                        </Grid>
                      )}
                    <Grid
                      item
                      xs={
                        values.partecipation !== "Y" ||
                        values.partecipants.length > 2
                          ? 3
                          : 2
                      }
                      sm={
                        values.partecipation !== "Y" ||
                        values.partecipants.length > 2
                          ? 3
                          : 2
                      }
                      display={"flex"}
                      justifyContent={"flex-end"}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => console.log(values)}
                      >
                        Invia risposta
                      </Button>
                    </Grid>
                  </Grid>
                )}
              </FieldArray>
            </>
          )}
        </Formik>
      </Container>
    </Form>
  );
};

export default InvitationForm;
