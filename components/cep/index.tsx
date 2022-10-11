import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";

import { getCep } from "../../actions/cep";

interface FieldProps {
  cep?: string;
  street?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 5 }}
    >
      {"Copyright © "}
      Desenvolvido por Rafael Caldeira {` `}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldProps) => {
    alert("Obrigado")
    console.log(data)
  };

  const handleCep = async () => {
    const { cep } = getValues();

    const unmask = cep.replace(/[^a-z\d\s]+/gi, "");

    if (unmask.length === 8) {
       const result = await getCep(unmask);

       setValue("city", result.localidade)
       setValue("street", result.logradouro)
       setValue("cep", result.cep)
       setValue("neighborhood", result.bairro)
       setValue("state", result.uf)
       setValue("number", "")
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Formulário
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputMask
                  placeholder="Cep"
                  mask="99999-999"
                  {...register("cep")}
                  onBlur={handleCep}
                  data-testid="cep"
                >
                  {(inputProps: any) => (
                    <TextField
                      {...inputProps}
                      required
                      fullWidth
                      name="cep"
                      id="cep"
                      InputLabelProps={{ shrink: true }}
                      
                    />
                  )}
                </InputMask>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="street"
                  label="Rua"
                  autoFocus
                  {...register("street")}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="Número"
                  {...register("number")}
                  autoComplete="family-name"
                  
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="neighborhood"
                  label="Bairro"
                  {...register("neighborhood")}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Cidade"
                  type="text"
                  id="city"
                  {...register("city")}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Estado"
                  type="text"
                  id="state"
                  {...register("state")}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Salvar
            </Button>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
