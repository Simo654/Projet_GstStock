import React, { useState } from "react";
import {Box,Typography,useTheme,IconButton,Button,Dialog,DialogTitle,DialogContent,TextField,FormControl,InputLabel,DialogActions,Select,FormHelperText,} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../../components/Header";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleEdit = (id) => {
    const selectedRow = mockDataTeam.find((row) => row.id === id);
    setSelectedRowData(selectedRow);
    setModalOpen(true);
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleDelete = (id) => {
    console.log(`Supprimer l'élément avec l'ID ${id}`);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});

  const handleAddClick = () => {
    setSelectedRowData({});
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const checkoutSchema = yup.object({
    Nom: yup.string().required("Le prénom est requis"),
    Prenom: yup.string().required("Le nom est requis"),
    email: yup.string().email("Format d'email invalide").required("L'email est requis"),
    address: yup.string().required("L'adresse est requise"),
    Telephone: yup.string().required("Le numéro de téléphone est requis"),
    password: yup.string(),
    role: yup.string().required("Le rôle est requis"),
  });

  const handleFormSubmit = (values) => {
    console.log("Formulaire soumis avec succès :", values);
    handleModalClose();
  };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "Nomdeproduit", headerName: "Nomdeproduit", flex: 1 },
    { field: "Categorie", headerName: "Categorie", flex: 1 },
    { field: "Quantite", headerName: "Quantite", flex: 1 },
    { field: "Prix", headerName: "Prix", flex: 1 },
    { field: "DateDachat", headerName: "Date D Achat", flex: 1 },
    { field: "Nomdutilisateur", headerName: "Nom d utilisateur", flex: 1 },
    
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      flex: 1,
      renderCell: ({ row }) => (
        <Box display="flex" justifyContent="space-around">
          <IconButton onClick={() => handleEdit(row.id)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(row.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="ADD Produit" subtitle="" />
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
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Ajouter
        </Button>

        <Dialog open={isModalOpen} onClose={handleModalClose}>
          <DialogTitle>ADD Produit</DialogTitle>
          <DialogContent>
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={{
                Nomdeproduit: selectedRowData?.Nomdeproduit || "",
                Categorie: selectedRowData?.Categorie || "",
                Quantite: selectedRowData?.Quantite || "",
                Prix: selectedRowData?.Prix || "",
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
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Nomdeproduit"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.Nom}
                      name="Nomdeproduit"
                      error={!!touched.Nom && !!errors.Nom}
                      helperText={touched.Nom && errors.Nom}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Categorie"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.Prenom}
                      name="Categorie"
                      error={!!touched.Prenom && !!errors.Prenom}
                      helperText={touched.Prenom && errors.Prenom}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Quantite"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="Quantite"
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Prix"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.address}
                      name="Prix"
                      error={!!touched.address && !!errors.address}
                      helperText={touched.address && errors.address}
                      sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="date"
                      label="Date d inscription"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.dateOfBirth}
                      name="dateOfBirth"
                      error={!!touched.dateOfBirth && !!errors.dateOfBirth}
                      helperText={touched.dateOfBirth && errors.dateOfBirth}
                      sx={{ gridColumn: "span 2", padding: "8px" }}  // Ajustez la valeur selon vos besoins
                    />
                    
                    <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
                      <InputLabel htmlFor="role">Role</InputLabel>
                      <Select
                      sx={{  padding: "8px" }}
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
          <DialogActions></DialogActions>
        </Dialog>
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
