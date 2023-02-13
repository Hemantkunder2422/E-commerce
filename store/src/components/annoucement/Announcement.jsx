import styled from "styled-components";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { data } from "../..//accouncements";

const Container = styled.div`
  height: 60px;
  background-color: teal;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const AnnouncementText = styled.h3`
  font-weight: 500;
`;

const Announcement = ({ showAccouncement }) => {
  return (
    <Container
      style={{
        height: `${showAccouncement ? "" : "0px"}`,
        transition: "5s ease-in-out",
      }}
    >
      <AnnouncementText>
        {data.map((accouncement) => {
          return <h4>{accouncement.text}</h4>;
        })}
      </AnnouncementText>

      <HighlightOffOutlinedIcon
        style={{
          fontSize: "30px",
          position: "absolute",
          right: "8px",
          top: "8px",
          cursor: "pointer",
        }}
        onClick={() => showAccouncement(false)}
      />
    </Container>
  );
};

export default Announcement;
