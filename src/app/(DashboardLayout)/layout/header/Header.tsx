'use client'
import React, {useState} from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import PropTypes from 'prop-types';
import Link from 'next/link';
// components
import Profile from './Profile';
import { IconBellRinging, IconMenu, IconCalendar } from '@tabler/icons-react';
import { appsLink } from './data';
import CalendarPage from '../../utilities/calendar/page';
interface ItemType {
  toggleMobileSidebar:  (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({toggleMobileSidebar}: ItemType) => {

  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>



        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
        >
          <Badge variant="dot" color="primary">
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>
        </IconButton>

        <IconButton
            size="large"
            aria-label="show calendar"
            color="inherit"
            onClick={handleClickOpen}
        >
          <Badge color="primary">
            <IconCalendar size="21" stroke="1.5" />
          </Badge>
        </IconButton>

        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
          <DialogContent>
            <CalendarPage />
          </DialogContent>
        </Dialog>

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Button variant="contained" component={Link} href="/authentication/login"   disableElevation color="primary" >
            Giriş Yap
          </Button>
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
