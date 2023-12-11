import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import 'bootstrap/dist/css/bootstrap.css';




 const Forgot = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="container d-flex flex-column">
    <div className="row align-items-center justify-content-center
      min-vh-100">
      <div className="col-12 col-md-8 col-lg-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="mb-4">
              <h5>Forgot Password?</h5>
              <p className="mb-2">Enter your registered email ID to reset the password
              </p>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" name="email" placeholder="Enter Your Email" required />
              </div>
              <div className="mb-3 d-grid">
                <button type="submit" className="btn btn-primary">
                  Reset Password
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  )
}
export default Forgot
