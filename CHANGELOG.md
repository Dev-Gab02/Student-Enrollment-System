## [2026-05-12] - Initial Project Setup

### Added
- [Concepcion Gabriel] Created initial project folder structure for student enrollment system
- [Concepcion Gabriel] Initialized React frontend using Vite
- [Concepcion Gabriel] Set up Node.js + Express backend server
- [Concepcion Gabriel] Installed required dependencies (express, cors, bcryptjs, jsonwebtoken, mssql)
- [Concepcion Gabriel] Created Azure SQL database schema (users and enrollments tables)
- [Concepcion Gabriel] Configured environment variables (.env setup)
- [Concepcion Gabriel] Successfully tested backend server on localhost

## [2026-05-13] - Backend Authentication System Implemented

### Added
- [Concepcion Gabriel] Configured Azure SQL Database connection using mssql package
- [Concepcion Gabriel] Created database connection module (db.js) with environment-based configuration
- [Concepcion Gabriel] Implemented bcrypt password hashing utility for secure credential storage
- [Concepcion Gabriel] Created user seed data for student and admin roles in Azure SQL Database
- [Concepcion Gabriel] Developed JWT-based authentication system for secure login
- [Concepcion Gabriel] Implemented login API endpoint (/api/auth/login)
- [Concepcion Gabriel] Added role-based user structure (student/admin) in database schema
- [Concepcion Gabriel] Verified successful authentication flow with token generation
- [Concepcion Gabriel] Integrated Express routing for authentication module

## [2026-05-13] - RBAC and Enrollment Workflow Implementation

### Added
- [Concepcion Gabriel] Implemented JWT authentication middleware for protected API access
- [Concepcion Gabriel] Created role-based access control (RBAC) middleware for student and admin authorization
- [Concepcion Gabriel] Developed student enrollment submission API endpoint
- [Concepcion Gabriel] Implemented student enrollment history retrieval endpoint
- [Concepcion Gabriel] Created admin API endpoint for viewing all enrollment requests
- [Concepcion Gabriel] Added enrollment approval and rejection functionality for administrators
- [Concepcion Gabriel] Integrated secure token validation using Authorization Bearer Token
- [Concepcion Gabriel] Implemented protected routing for role-restricted backend resources
- [Concepcion Gabriel] Verified enrollment lifecycle flow: submission → pending → admin approval/rejection

### Changed
- [Concepcion Gabriel] Updated backend route structure to support enrollment and admin modules
- [Concepcion Gabriel] Improved backend architecture by separating controllers, middleware, and route handlers

## [2026-05-13] - Frontend RBAC Interface and API Integration

### Added
- [Concepcion Gabriel] Set up React frontend using Vite architecture
- [Concepcion Gabriel] Configured React Router for multi-page navigation
- [Concepcion Gabriel] Implemented student login interface with authentication flow
- [Concepcion Gabriel] Created admin login interface with role validation
- [Concepcion Gabriel] Developed student dashboard page for enrollment access
- [Concepcion Gabriel] Implemented enrollment submission form integrated with backend API
- [Concepcion Gabriel] Created admin dashboard for viewing student enrollment requests
- [Concepcion Gabriel] Added enrollment approval functionality in admin panel
- [Concepcion Gabriel] Configured Axios API service for backend communication
- [Concepcion Gabriel] Implemented JWT token storage using localStorage

### Changed
- [Concepcion Gabriel] Updated frontend architecture with modular folder structure
- [Concepcion Gabriel] Improved route organization using protected role-based navigation

### Fixed
- [Concepcion Gabriel] Verified successful frontend-to-backend API communication
- [Concepcion Gabriel] Confirmed protected route behavior for student and admin roles