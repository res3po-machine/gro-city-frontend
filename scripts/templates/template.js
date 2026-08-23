/**
 * Generates the HTML string template for the Sign-Up view using Materialize CSS classes.
 * @returns {string} HTML markup for the sign-up form.
 */
const signupTemplate = () => {
  return `<section class="signup">
    <h3 class="signup-heading">Sign Up</h3>
    <form class="col s12">
      <div class="row">
        <!-- First Name Input Field -->
        <div class="input-field col s6">
          <input class="name" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <!-- Last Name Input Field -->
        <div class="input-field col s6">
          <input class="name" id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <!-- Email Input Field -->
        <div class="input-field col s12">
          <input class="signup-email" id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <!-- Password Input Field -->
        <div class="input-field col s12">
          <input class="signup-password" id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div>
        <!-- Form Action Controls -->
        <button class="btn waves-effect waves-light signup-btn" type="submit" name="action">Sign Up
        </button>
        <a class="login-link" href="#">Login</a>
      </div>
    </form>
  </section>`;
}

/**
 * Generates the HTML string template for the Log-In view using Materialize CSS classes.
 * @returns {string} HTML markup for the login form.
 */
const loginTemplate = () => {
  return `<section class="login">
    <h3 class="login-heading">Log In</h3>
    <form>
      <div class="row">
        <!-- Email Input Field -->
        <div class="input-field col s12">
          <input class="login-email" id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <!-- Password Input Field -->
        <div class="input-field col s12">
          <input class="login-password" id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div>
        <!-- Form Action Controls -->
        <button class="btn waves-effect waves-light login-btn" type="submit" name="action">Login
        </button>
        <a class="create-account-link" href="#">Create New Account</a>
      </div>
    </form>
  </section>`;
}

/**
 * Generates an HTML card component to display detailed plant info.
 * @param {Object} data - Plant data containing image URL, scientific name, ID, and detailed attributes object.
 * @returns {string} HTML markup for a dynamic plant information card.
 */
const cardTemplate = (data) => {
  return `<div class="col s4">
    <!-- Main Materialize Card Wrapper -->
    <div class="card sticky-action blue">
      <!-- Front Image & Title Container (Triggers Card Reveal) -->
      <div class="plant-image activator card-image waves-effect waves-block waves-light" style="background-image:url('${data.imageUrl}');">
        <span class="card-title activator">${data.scientific_name}</span>
      </div>
      <!-- Card Actions / Dropdown Menu Area -->
      <div class="card-action">
        <a class='dropup-trigger btn waves-effect waves-light' href='#' data-target='plant-id-${data.id}'>Add</a>
        <!-- Dynamic Dropdown Container for Plant Options -->
        <ul id='plant-id-${data.id}' class='dropdown-content add-dropdown'>
        </ul>
        </div>
        <!-- Card Reveal Section (Shows full plant details when clicked) -->
        <div class="card-reveal">
          <span class="card-title black-text">${data.scientific_name}<i class="material-icons right">close</i></span>
          <p style="position: absolute; left: 10%;">
            Symbol: ${data.data.symbol}<br>
            Location: ${data.data.state}<br>
            Category: ${data.data.category}<br>
            Duration: ${data.data.duration}<br>
            Habit: ${data.data.habit}<br>
            Invasive: ${data.data.invasive}<br>
            Grow Period: ${data.data.growPeriod}<br>
            Flower Color: ${data.data.flowerColor}<br>
            Flower Conspicuous: ${data.data.flowerConsp}<br>
            Foliage Color: ${data.data.foliageColor}<br>
            Coarse Soil: ${data.data.coarseSoil}<br>
            Medium Soil: ${data.data.medSoil}<br>
            Fine Soil: ${data.data.fineSoil}<br>
            Moisture: ${data.data.moisture}<br>
            Shade: ${data.data.shade}<br>
            Temperature Minimum: ${data.data.tempMin} °F<br>
            Bloom Period: ${data.data.bloomPeriod}<br>
            Commercial Availability: ${data.data.commAvailability}
            <br>
            <br>
            <br>
            <br>
        </p>
        </div>
      </div>
    </div>
  </div>`
}

// Export template functions for CommonJS module usage
module.exports = {
  signupTemplate,
  loginTemplate,
  cardTemplate
};