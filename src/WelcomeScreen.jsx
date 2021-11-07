import React from "react";
import './WelcomeScreen.css';
function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <div className="welcomeScreenWrapper">
        <h1>Welcome to the Meet app</h1>
        <h4>Log in to see upcoming events around the world for full-stack developers</h4>
        <div className="button_cont" align="center">
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google sign-in" />
            </div>
            <button onClick={() => { props.getAccessToken() }} rel="nofollow noopener" class="btn-text"><b>Sign in with google</b></button>
          </div>
        </div>
        <a className="privacy-policy-link" href="https://adavidson87.github.io/meet/privacy-policy.html" rel="nofollow noopener">Privacy policy</a>
        <p>Background image by <a href="https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1869510">Pexels</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1869510">Pixabay</a></p>
      </div>
    </div>
  )
    : null
}
export default WelcomeScreen;