FROM nginx:alpine

# Create non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx content
RUN rm -rf ./*

# Copy application files from src folder
COPY src/ .

# Change ownership to non-root user
RUN chown -R appuser:appgroup /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:80 || exit 1

# Switch to non-root user
USER appuser

# Run nginx
CMD ["nginx", "-g", "daemon off;"]