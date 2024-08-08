'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Typography, Grid, Card, CardContent, TextField, Button, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
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

interface BirthRecord {
    calfId: string;
    motherId: string;
    calfWeight: string;
    calfGender: string;
    calfDateOfBirth: string;
    calfNotes: string;
}

const BirthRecordPage = () => {
    const [animals] = useState<Animal[]>([
        { id: '1', breed: 'Holstein', weight: '600', age: '5', pedigree: 'XYZ', motherId: '0', joiningMethod: 'birth' },
        { id: '2', breed: 'Jersey', weight: '500', age: '4', pedigree: 'ABC', motherId: '0', joiningMethod: 'purchase' },
        // Add more animals as needed
    ]);

    const [birthRecords, setBirthRecords] = useState<BirthRecord[]>([]);
    const [form, setForm] = useState<BirthRecord>({
        calfId: '',
        motherId: '',
        calfWeight: '',
        calfGender: '',
        calfDateOfBirth: '',
        calfNotes: ''
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
        setBirthRecords([...birthRecords, form]);
        setForm({
            calfId: '',
            motherId: '',
            calfWeight: '',
            calfGender: '',
            calfDateOfBirth: '',
            calfNotes: ''
        });
    };

    return (
        <PageContainer title="Doğum Kayıtları" description="Bu sayfada yeni doğan yavruların bilgilerini girebilir ve görüntüleyebilirsiniz.">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Yeni Doğum Kaydı Ekle
                    </Typography>
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            name="calfId"
                                            label="Yavru Kimliği"
                                            fullWidth
                                            value={form.calfId}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel>Anne İnek Kimliği</InputLabel>
                                            <Select
                                                name="motherId"
                                                value={form.motherId}
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
                                            name="calfWeight"
                                            label="Yavru Kilosu"
                                            fullWidth
                                            value={form.calfWeight}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel>Cinsiyet</InputLabel>
                                            <Select
                                                name="calfGender"
                                                value={form.calfGender}
                                                onChange={handleSelectChange}
                                            >
                                                <MenuItem value="male">Erkek</MenuItem>
                                                <MenuItem value="female">Dişi</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            name="calfDateOfBirth"
                                            label="Doğum Tarihi"
                                            type="date"
                                            fullWidth
                                            InputLabelProps={{ shrink: true }}
                                            value={form.calfDateOfBirth}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="calfNotes"
                                            label="Notlar"
                                            fullWidth
                                            multiline
                                            rows={4}
                                            value={form.calfNotes}
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
                        Doğum Kayıtları
                    </Typography>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Yavru Kimliği</TableCell>
                                    <TableCell>Anne İnek Kimliği</TableCell>
                                    <TableCell>Yavru Kilosu</TableCell>
                                    <TableCell>Cinsiyet</TableCell>
                                    <TableCell>Doğum Tarihi</TableCell>
                                    <TableCell>Notlar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {birthRecords.map((record, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{record.calfId}</TableCell>
                                        <TableCell>{record.motherId}</TableCell>
                                        <TableCell>{record.calfWeight}</TableCell>
                                        <TableCell>{record.calfGender}</TableCell>
                                        <TableCell>{record.calfDateOfBirth}</TableCell>
                                        <TableCell>{record.calfNotes}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default BirthRecordPage;
