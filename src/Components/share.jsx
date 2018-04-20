import { FacebookButton, FacebookCount } from "react-social";
 
class App extends Component {
  render {
    let url = "https://github.com";
 
    return (
      <FacebookButton url={url} appId={appId}>
        <FacebookCount url={url} />
        {" Share " + url}
      </FacebookButton>
    );
  }
}