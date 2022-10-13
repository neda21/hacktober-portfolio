import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import ProfileImg from "../../../public/Shiyas.jpg"

export default function PortfolioNavbar() {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Text b color="inherit" className="nav-heading" >
            Portfolio
        </Text>
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit" hideIn="xs">
            Portfolio
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="/Shiyas.jpg"
                />
            </Navbar.Item>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
