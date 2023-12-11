import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  // État pour gérer l'ouverture/fermeture de la fenêtre modale
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    // Mettez à jour l'état pour ouvrir la fenêtre modale
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    // Mettez à jour l'état pour fermer la fenêtre modale
    setIsModalOpen(false);
  };

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {/* Bouton Ajouter */}
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Ajouter
        </Button>

        {/* Fenêtre modale pour le formulaire */}
        <Dialog open={isModalOpen} onClose={handleModalClose}>
          <DialogTitle>Ajouter un contact</DialogTitle>
          <DialogContent>
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={{
                productImage: "",
                productName: "",
                category: "",
                quantity: "",
                price: "",
                address1: "",
                address2: "",
                role: "",
              }}
              validationSchema={checkoutSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobile ? undefined : "span 4",
                      },
                    }}
                  >
                    {/* ... (autres champs de formulaire) */}
                    <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nom"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="Nom"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Prenom"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="Prenom"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
                      />
                      <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
                      />
                    <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Telephone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="Telephone"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
                      />

                      
                    <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
                    
                      <InputLabel htmlFor="role">Role</InputLabel>
                      <Select
                        native
                        value={values.role}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputProps={{
                          name: 'role',
                          id: 'role',
                        }}
                        error={!!touched.role && !!errors.role}
                      >
                        <option value="" disabled>
                          Select a role
                        </option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="User">User</option>
                      </Select>
                      {touched.role && errors.role && (
                        <FormHelperText error>{errors.role}</FormHelperText>
                      )}
                    </FormControl>
                  </Box>
                  <Box display="flex" justifyContent="end" mt="20px">
                    <Button type="submit" color="secondary" variant="contained">
                      ADD
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </DialogContent>
          <DialogActions>
            
          </DialogActions>
        </Dialog>

        {/* Tableau de données existant */}
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  productImage: yup.string().required("required"),
  productName: yup.string().required("required"),
  category: yup.string().required("required"),
  quantity: yup.string().required("required"),
  price: yup.string().required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
  role: yup.string().required("required"),
});

export default Contacts;
