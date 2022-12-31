import styled from "@emotion/styled";
import {
  Apps,
  Group,
  Home,
  OndemandVideo,
  Search,
  Storefront,
  Notifications,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  InputBase,
  Toolbar,
  Box,
  Stack,
  Tooltip,
  IconButton,
  Badge,
} from "@mui/material";
import React from "react";

const NavbarContainer = styled(Box)({
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  color: "black",
  alignItems: "center",
  height: "4rem",
});

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  padding: "10px",
  margin: "0px",
});

const SearchInput = styled("div")({
  width: "15rem",
  height: "3rem",
  borderRadius: "5rem",
  backgroundColor: "#f0f2f5",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "0 10px",
  color: "black",
  marginLeft: "1rem",
});

const InputBaseStyled = styled(InputBase)({
  fontSize: "14px",
  fontFamily: "sans-serif",
  fontWeight: 100,
  color: "black",
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 3,
    top: 3,
    padding: '0 4px',
  },
}));

function Navbar(props) {
  return (
    <AppBar position="sticky" sx={{ boxShadow: 0 }}>
      <NavbarContainer>
        <StyledToolBar>
          <Avatar
            alt="Facebook"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
          />
          <SearchInput>
            <Search color="black" />
            <InputBaseStyled placeholder="Cari di Facebook"></InputBaseStyled>
          </SearchInput>
        </StyledToolBar>
        <Stack direction="row" spacing={7} color="#65676b" ml="-5rem">
          <Tooltip title="Beranda">
            <IconButton>
              <Home sx={{ fontSize: "1.7rem", color: "#1b74e4" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Watch">
            <IconButton>
              <OndemandVideo sx={{ fontSize: "1.7rem" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Marketplace">
            <IconButton>
              <Storefront sx={{ fontSize: "1.7rem" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Group">
            <IconButton>
              <Group sx={{ fontSize: "1.7rem" }} />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack direction="row" spacing={-1}>
          <Tooltip title="Menu">
            <IconButton>
              <Avatar sx={{ backgroundColor: "#e4e6eb" }}>
                <Apps sx={{ fontSize: "1.5rem", color: "black" }} />
              </Avatar>
            </IconButton>
          </Tooltip>

          <Tooltip title="Messenger">
            <IconButton>
              <StyledBadge badgeContent={8} color="error">
                <Avatar sx={{ backgroundColor: "#e4e6eb" }}>
                  <Avatar
                    sx={{ width: "22px", height: "22px" }}
                    src="https://cdn-icons-png.flaticon.com/512/733/733604.png"
                  ></Avatar>
                </Avatar>
              </StyledBadge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifikasi">
            <IconButton>
              <StyledBadge badgeContent={12} color="error">
                <Avatar sx={{ backgroundColor: "#e4e6eb" }}>
                  <Notifications sx={{ fontSize: "1.5rem", color: "black" }} />
                </Avatar>
              </StyledBadge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Akun">
            <IconButton>
              <Avatar src="https://scontent.fcgk29-1.fna.fbcdn.net/v/t39.30808-6/322574330_636665574814559_5540904427396402060_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEzA2-3W6Uyhhv5m4tE8YJo8a8MJP4tgnTxrwwk_i2CdOziJnd4bVjQfyFEZbOqO3DfPgF13NOoQVcJQFTkFCCB&_nc_ohc=KDolDwXRyVYAX-CyNCE&_nc_ht=scontent.fcgk29-1.fna&oh=00_AfCrrycpXmQndqZuKINjIHlgMb4qPfX_lzmHzk8pS06YOg&oe=63B4DD72"></Avatar>
            </IconButton>
          </Tooltip>
        </Stack>
      </NavbarContainer>
    </AppBar>
  );
}

export default Navbar;
