# Render Deployment Guide

This guide will help you deploy both the frontend and backend of Shanruck Technologies website to Render.

## 📋 Prerequisites

- GitHub account
- Render account (sign up at [render.com](https://render.com))
- Email credentials for contact form functionality

## 🚀 Deployment Steps

### Option 1: Automatic Deployment with render.yaml (Recommended)

1. **Push your code to GitHub** (already done!)
   - Your repository: https://github.com/SOLAIRAJ28/intern.git

2. **Connect to Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New" → "Blueprint"
   - Connect your GitHub account
   - Select repository: `SOLAIRAJ28/intern`
   - Render will automatically detect the `render.yaml` file

3. **Configure Environment Variables**
   - Render will create two services automatically
   - For **shanruck-backend**, add these environment variables in Render dashboard:
     ```
     EMAIL_USER=info@shanrucktechnologies.in
     EMAIL_PASS=Shanruck@016
     EMAIL_TO=info@shanrucktechnologies.in
     ```

4. **Update Frontend API URL**
   - After backend is deployed, note the backend URL (e.g., `https://shanruck-backend.onrender.com`)
   - Go to **shanruck-frontend** service settings
   - Add environment variable:
     ```
     VITE_API_URL=https://shanruck-backend.onrender.com
     ```
   - Trigger a manual redeploy

### Option 2: Manual Deployment

#### Deploy Backend (Web Service)

1. **Create New Web Service**
   - Go to Render Dashboard → "New" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     ```
     Name: shanruck-backend
     Region: Singapore (or closest to you)
     Branch: main
     Root Directory: server
     Runtime: Node
     Build Command: npm install
     Start Command: npm start
     Plan: Free
     ```

2. **Set Environment Variables**
   ```
   PORT=5000
   NODE_ENV=production
   EMAIL_HOST=smtpout.secureserver.net
   EMAIL_PORT=465
   EMAIL_USER=info@shanrucktechnologies.in
   EMAIL_PASS=Shanruck@016
   EMAIL_TO=info@shanrucktechnologies.in
   ```

3. **Deploy** - Wait for build to complete

#### Deploy Frontend (Static Site)

1. **Create New Static Site**
   - Go to Render Dashboard → "New" → "Static Site"
   - Connect your GitHub repository
   - Configure:
     ```
     Name: shanruck-frontend
     Region: Singapore (or closest to you)
     Branch: main
     Root Directory: (leave empty or set to /)
     Build Command: npm install && npm run build
     Publish Directory: dist
     Plan: Free
     ```

2. **Set Environment Variables**
   ```
   VITE_API_URL=https://shanruck-backend.onrender.com
   ```
   (Replace with your actual backend URL from step 1)

3. **Configure Redirects/Rewrites** (for React Router)
   - Add a rewrite rule in Render dashboard:
     ```
     Source: /*
     Destination: /index.html
     Status: Rewrite
     ```

4. **Deploy** - Wait for build to complete

## 🔧 Post-Deployment Configuration

### Update CORS Settings (if needed)

If you need to restrict CORS to only your frontend domain:

1. Edit `server/server.js`
2. Update the CORS configuration:
   ```javascript
   app.use(cors({
     origin: 'https://shanruck-frontend.onrender.com',
     credentials: true
   }));
   ```
3. Commit and push changes

### Custom Domain (Optional)

1. Go to your frontend service settings
2. Navigate to "Custom Domain"
3. Add your domain (e.g., `www.shanrucktechnologies.in`)
4. Follow Render's DNS configuration instructions

## 📝 Important Notes

### Free Tier Limitations

- **Spin Down**: Free services sleep after 15 minutes of inactivity
- **First Request**: May take 30-50 seconds to wake up
- **Build Minutes**: 750 minutes/month shared across all services
- **Bandwidth**: 100GB/month

### Email Configuration

- GoDaddy SMTP may have connection issues from some cloud providers
- Consider using Gmail SMTP if issues persist:
  ```
  EMAIL_HOST=smtp.gmail.com
  EMAIL_PORT=587
  EMAIL_USER=your-email@gmail.com
  EMAIL_PASS=your-app-password
  ```

### Environment Variables Security

- Never commit `.env` files with sensitive credentials
- Always use Render's environment variable dashboard
- Use different credentials for production

## 🔍 Troubleshooting

### Backend Issues

1. **Check logs**: Render Dashboard → Service → "Logs" tab
2. **Health check**: Visit `https://your-backend.onrender.com` - should see "Server is running"
3. **Email errors**: Check if SMTP credentials are correct

### Frontend Issues

1. **API not connecting**: Ensure `VITE_API_URL` is set correctly
2. **404 errors on refresh**: Make sure rewrite rule is configured
3. **Blank page**: Check browser console for errors

### Build Failures

1. **Clear build cache**: Render Dashboard → Service → "Settings" → "Clear Build Cache"
2. **Check Node version**: Ensure package.json has compatible dependencies
3. **Manual deploy**: Trigger manual deploy from dashboard

## 🎯 Testing Deployment

After deployment:

1. **Test backend**: `https://your-backend.onrender.com`
2. **Test API**: `https://your-backend.onrender.com/api/contact` (POST request)
3. **Test frontend**: Visit your frontend URL
4. **Test contact form**: Submit a test enquiry
5. **Check email**: Verify email delivery

## 🔄 Continuous Deployment

Both services will automatically redeploy when you push to the `main` branch on GitHub.

To disable auto-deployment:
- Go to service settings
- Turn off "Auto-Deploy"

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [Node.js on Render](https://render.com/docs/deploy-node-express-app)
- [Static Sites on Render](https://render.com/docs/static-sites)
- [Environment Variables](https://render.com/docs/environment-variables)

## 🆘 Support

If you encounter issues:
1. Check Render's status page: https://status.render.com/
2. Review service logs in Render dashboard
3. Consult Render community: https://community.render.com/

---

**Your URLs after deployment:**
- Frontend: `https://shanruck-frontend.onrender.com`
- Backend: `https://shanruck-backend.onrender.com`

(Replace with your actual service names if different)
