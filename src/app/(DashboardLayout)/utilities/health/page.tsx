'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Typography, Grid, CardContent, TextField, Button, Card, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import BlankCard from '@/app/(DashboardLayout)/components/shared/BlankCard';

interface Animal {
    id: string;
    breed: string;
    weight: string;
    age: string;
    pedigree: string;
    motherId: string;
    joiningMethod: string;
}

interface HealthRecord {
    cowId: string;
    date: string;
    vaccinationStatus: string;
    notes: string;
}

const HealthPage = () => {
    const [animals] = useState<Animal[]>([
        { id: '1', breed: 'Holstein', weight: '600', age: '5', pedigree: 'XYZ', motherId: '0', joiningMethod: 'birth' },
        { id: '2', breed: 'Jersey', weight: '500', age: '4', pedigree: 'ABC', motherId: '0', joiningMethod: 'purchase' },
        // Add more animals as needed
    ]);

    const [healthRecords, setHealthRecords] = useState<HealthRecord[]>([]);
    const [form, setForm] = useState<HealthRecord>({
        cowId: '',
        date: '',
        vaccinationStatus: '',
        notes: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name as string]: value as string
        });
    };

    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setHealthRecords([...healthRecords, form]);
        setForm({
            cowId: '',
            date: '',
            vaccinationStatus: '',
            notes: ''
        });
    };

    const getHealthRecords = (cowId: string) => {
        return healthRecords.filter((record) => record.cowId === cowId).reverse();
    };

    return (
        <PageContainer title="Sağlık Karnesi" description="this is Sağlık Karnesi">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Sağlık Verisi Ekle
                    </Typography>
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel>İnek Kimliği</InputLabel>
                                            <Select
                                                name="cowId"
                                                value={form.cowId}
                                                onChange={handleSelectChange}
                                            >
                                                {animals.map((animal) => (
                                                    <MenuItem key={animal.id} value={animal.id}>
                                                        {animal.id}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            name="date"
                                            label="Tarih"
                                            type="date"
                                            fullWidth
                                            InputLabelProps={{ shrink: true }}
                                            value={form.date}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="vaccinationStatus"
                                            label="Aşı Durumu"
                                            fullWidth
                                            value={form.vaccinationStatus}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="notes"
                                            label="Notlar"
                                            fullWidth
                                            multiline
                                            rows={4}
                                            value={form.notes}
                                            onChange={handleChange}
                                        />
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
                        İneklerin Sağlık Karnesi
                    </Typography>
                    <Grid container spacing={3}>
                        {animals.map((animal) => (
                            <Grid item xs={12} sm={6} md={4} key={animal.id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">İnek Kimliği: {animal.id}</Typography>
                                        <Typography variant="subtitle1">Sağlık Kayıtları:</Typography>
                                        {getHealthRecords(animal.id).map((record, index) => (
                                            <div key={index}>
                                                <Typography>{record.date}: {record.vaccinationStatus}</Typography>
                                                <Typography variant="body2">{record.notes}</Typography>
                                            </div>
                                        ))}
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

export default HealthPage;
