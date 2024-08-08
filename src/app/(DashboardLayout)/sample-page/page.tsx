'use client';

import { Typography, Grid, Card, CardContent, Paper, Divider } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

const SiteSettingsPage = () => {
    return (
        <PageContainer title="Site Ayarları" description="Site ayarlarınızı buradan görüntüleyebilirsiniz.">

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Genel Ayarlar
                    </Typography>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Site Başlığı
                            </Typography>
                            <Paper sx={{ p: 2, mb: 2 }}>
                                <Typography>Örnek Site Başlığı</Typography>
                            </Paper>
                            <Typography variant="h6" gutterBottom>
                                Site Açıklaması
                            </Typography>
                            <Paper sx={{ p: 2, mb: 2 }}>
                                <Typography>Bu site, tarım ve çiftlik yönetimi için kapsamlı bir yönetim aracıdır.</Typography>
                            </Paper>
                            <Typography variant="h6" gutterBottom>
                                Koyu Modu
                            </Typography>
                            <Paper sx={{ p: 2, mb: 2 }}>
                                <Typography>Koyu mod aktif değil.</Typography>
                            </Paper>
                            <Typography variant="h6" gutterBottom>
                                İletişim E-posta Adresi
                            </Typography>
                            <Paper sx={{ p: 2, mb: 2 }}>
                                <Typography>contact@example.com</Typography>
                            </Paper>
                            <Typography variant="h6" gutterBottom>
                                Logo URL
                            </Typography>
                            <Paper sx={{ p: 2, mb: 2 }}>
                                <Typography>https://example.com/logo.png</Typography>
                            </Paper>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="h4" gutterBottom>
                        İletişim ve Destek
                    </Typography>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Yönetici E-posta Adresi
                            </Typography>
                            <Paper sx={{ p: 2, mb: 2 }}>
                                <Typography>admin@example.com</Typography>
                            </Paper>
                            <Typography variant="h6" gutterBottom>
                                Destek İletişim
                            </Typography>
                            <Paper sx={{ p: 2, mb: 2 }}>
                                <Typography>support@example.com</Typography>
                            </Paper>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default SiteSettingsPage;
