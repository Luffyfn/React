import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
      <form class="form-inline">
          <label class="sr-only" for="inlineFormInputName2">Name</label>
          <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Full Name"/>

          <label class="sr-only" for="inlineFormInputGroupUsername2">E-mail</label>
          <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="E-mail"/>
          </div>

          <div class="form-check mb-2 mr-sm-2">
              <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
              <label class="form-check-label" for="inlineFormCheck">Remember me</label>
          </div>

          <button type="submit" class="btn btn-primary mb-2">Sign in</button>
      </form>
    ); 
}

export default App;
