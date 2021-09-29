import { Navbar } from "../navbar";
import { ContentContainer } from "../content-container"

export function Layout(props) {
  return (
    <>
      <Navbar />
      <ContentContainer>
        {props.children}
      </ContentContainer>
    </>
  );
}
