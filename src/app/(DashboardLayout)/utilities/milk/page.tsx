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

interface MilkYield {
    cowId: string;
    date: string;
    yield: string;
}

const MilkYieldPage = () => {
    const [animals] = useState<Animal[]>([
        { id: '1', breed: 'Holstein', weight: '600', age: '5', pedigree: 'XYZ', motherId: '0', joiningMethod: 'birth' },
        { id: '2', breed: 'Jersey', weight: '500', age: '4', pedigree: 'ABC', motherId: '0', joiningMethod: 'purchase' },
        // Add more animals as needed
    ]);

    const [milkYields, setMilkYields] = useState<MilkYield[]>([]);
    const [form, setForm] = useState<MilkYield>({
        cowId: '',
        date: '',
        yield: ''
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
        setMilkYields([...milkYields, form]);
        setForm({
            cowId: '',
            date: '',
            yield: ''
        });
    };

    const getLastThreeYields = (cowId: string) => {
        return milkYields
            .filter((yieldData) => yieldData.cowId === cowId)
            .slice(-3)
            .reverse();
    };

    return (
        <PageContainer title="Süt Verimi" description="this is Süt Verimi">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Süt Verisi Ekle
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
                                            name="yield"
                                            label="Süt Miktarı (L)"
                                            fullWidth
                                            value={form.yield}
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
                        İneklerin Süt Verimleri
                    </Typography>
                    <Grid container spacing={3}>
                        {animals.map((animal) => (
                            <Grid item xs={12} sm={6} md={4} key={animal.id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">İnek Kimliği: {animal.id}</Typography>
                                        <Typography variant="subtitle1">Son 3 Günlük Süt Verimi:</Typography>
                                        {getLastThreeYields(animal.id).map((yieldData, index) => (
                                            <Typography key={index}>
                                                {yieldData.date}: {yieldData.yield} L
                                            </Typography>
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

export default MilkYieldPage;
