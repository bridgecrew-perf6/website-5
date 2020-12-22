import { SupportingContentText } from "../../components/PageSupportingContent";

const HomePageContent = (
  <SupportingContentText>
    Hello&#128075; My name is Dan, and I'm a Senior at
    <a
      href="https://www.davidson.edu/"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#748592",
        textDecoration: "underline",
        textDecorationColor: "#C8C8C8",
        fontWeight: "bold",
      }}
    >
      {" "}
      Davidson College
    </a>
    . I'm an Economics major, and I spend most of my time coding, reading, and
    working on
    <a
      href="/projects"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#748592",
        textDecoration: "underline",
        textDecorationColor: "#C8C8C8",
        fontWeight: "bold",
      }}
    >
      {" "}
      personal projects
    </a>
    . I'm passionate about contributing to Open Source Software, designing
    accessible and easy-to-use Interfaces, and building a more equitable
    technoligical future.
    <br />
    <br />
    Learn more{" "}
    <a
      href="/about"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#748592",
        textDecoration: "underline",
        textDecorationColor: "#C8C8C8",
        fontWeight: "bold",
      }}
    >
      about me
    </a>{" "}
    and the things I'm{" "}
    <a
      href="/projects"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#748592",
        textDecoration: "underline",
        textDecorationColor: "#C8C8C8",
        fontWeight: "bold",
      }}
    >
      working on
    </a>
    !
  </SupportingContentText>
);

export default HomePageContent;
