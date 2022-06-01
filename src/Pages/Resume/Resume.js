import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div class="breadcrumb-section section-bg position-relative">
            <div class="breadcrumb-shape-top-left"></div>
            <div class="breadcrumb-shape-bottom-right"></div>
            <div class="breadcrumb-box">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-content text-center">
                                <h2 class="title">My Resume</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb breadcrumb-link">
                                        <li class="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li
                                            class="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Resume
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;