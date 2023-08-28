import reactLogo from './assets/react.svg'
import githubLogo from './assets/github.png'

export default function Footer() {
    return (
      <footer id="footer">
        <h4>Made with</h4>
        <img src={reactLogo} className="logo" alt="React logo" />
        <a href="https://github.com/grxnto" target="_blank">grxnto.github</a>
        <img src={githubLogo} className="github" alt="github logo" />
      </footer>
    );
}