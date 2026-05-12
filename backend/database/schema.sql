CREATE TABLE users (
    id INT PRIMARY KEY IDENTITY(1,1),
    student_id VARCHAR(50) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    course VARCHAR(100),
    year_level VARCHAR(50),
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at DATETIME DEFAULT GETDATE()
);

CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY IDENTITY(1,1),

    student_id VARCHAR(50),

    semester VARCHAR(50),
    contact_number VARCHAR(20),
    address TEXT,
    selected_subjects TEXT,

    status VARCHAR(20) DEFAULT 'Pending',

    admin_remark TEXT,

    created_at DATETIME DEFAULT GETDATE(),

    FOREIGN KEY (student_id)
    REFERENCES users(student_id)
);