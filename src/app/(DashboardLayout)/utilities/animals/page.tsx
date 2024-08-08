'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Typography, Grid, CardContent, TextField, Button, Card, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';


interface Animal {
  id: string;
  breed: string;
  weight: string;
  age: string;
  pedigree: string;
  motherId: string;
  joiningMethod: string;
}

const TypographyPage = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [form, setForm] = useState<Animal>({
    id: '',
    breed: '',
    weight: '',
    age: '',
    pedigree: '',
    motherId: '',
    joiningMethod: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setAnimals([...animals, form]);
    setForm({
      id: '',
      breed: '',
      weight: '',
      age: '',
      pedigree: '',
      motherId: '',
      joiningMethod: ''
    });
  };

  return (
      <PageContainer title="Hayvanlarım" description="this is Hayvanlarım">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Hayvan Ekle
            </Typography>
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                          name="id"
                          label="Kimlik"
                          fullWidth
                          value={form.id}
                          onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                          name="breed"
                          label="Irk"
                          fullWidth
                          value={form.breed}
                          onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                          name="weight"
                          label="Kilo"
                          fullWidth
                          value={form.weight}
                          onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                          name="age"
                          label="Yaş"
                          fullWidth
                          value={form.age}
                          onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                          name="pedigree"
                          label="Aşılar"
                          fullWidth
                          value={form.pedigree}
                          onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                          name="motherId"
                          label="Annesinin Kimliği"
                          fullWidth
                          value={form.motherId}
                          onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>Katılım Yöntemi</InputLabel>
                        <Select
                            name="joiningMethod"
                            value={form.joiningMethod}
                            onChange={handleSelectChange}
                        >
                          <MenuItem value="purchase">Satın Alma</MenuItem>
                          <MenuItem value="birth">Doğum</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary">
                        Ekle
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Hayvanlarım
            </Typography>
            <Grid container spacing={3}>
              {animals.map((animal, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6">Kimlik: {animal.id}</Typography>
                        <Typography>Irk: {animal.breed}</Typography>
                        <Typography>Kilo: {animal.weight}</Typography>
                        <Typography>Yaş: {animal.age}</Typography>
                        <Typography>Soyağacı: {animal.pedigree}</Typography>
                        <Typography>Annesinin Kimliği: {animal.motherId}</Typography>
                        <Typography>Katılım Yöntemi: {animal.joiningMethod === 'purchase' ? 'Satın Alma' : 'Doğum'}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
  );
};

export default TypographyPage;
