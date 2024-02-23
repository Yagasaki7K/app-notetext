import styled from 'styled-components'

const HomeDetails = styled.div`
    form {
        width: 92%;

        input {
            width: 100%;
            font-size: 1.5rem;
            background: transparent;
            border: none;
            color: var(--gray);
            margin: 2rem 0rem 2rem 8rem;
            padding-bottom: 1rem;
        }

        @media (max-width: 768px) {
            width: 60%;
            margin: 2rem 2rem 0rem -1rem;
        }

        input:focus {
            border: none;
            outline: none;
        }
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        margin-top: -2rem;
        margin-left: 5rem;

        @media (max-width: 768px) {
            margin-left: 0.8rem;
            margin-right: 1rem;
        }

        .addedCard {
            background: #334155;
        }

        .gradientCard {
            background: rgb(30,41,59);
            background: linear-gradient(180deg, #1e293b 0%, #0d1219 100%);
        }
        
        .card {
            width: 350px;
            height: 200px;
            margin-top: 1rem;
            margin-left: 2.5rem;
            padding: 1rem;
            border-radius: 15px;
            cursor: pointer;
            box-shadow: 1px;
            transition: 0.5s;
            border: 1px solid rgb(0,0,0,0.1);

            h3 {
                transition: 0.5s;
            }

            p {
                display: -webkit-box;
                -webkit-line-clamp: 5;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                color: var(--gray);
            }

            .date {
                font-size: 0.9rem;
            }

            .advice {
                color: var(--gray);
            }

            .markdown-preview {
                overflow: hidden;
                color: var(--white);
                background: transparent;
                margin-top: 0.3rem;
                
                textarea {
                    -webkit-text-fill-color: #fff;
                    background: var(--background);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    height: 27rem;
                }

                .w-md-editor-content {
                    height: 12rem;
                }

                .w-md-editor {
                    background: var(--background);
                }

                * {
                    overflow: hidden;
                }

                .w-md-editor-toolbar, .w-md-editor-bar {
                    display: none;
                }

                .w-md-editor-area {
                    height: 15rem;
                    overflow: hidden;
                }

                .wmde-markdown {
                    background: transparent;
                    font-family: 'Poppins', sans-serif;
                }
            }
        }

        .card:hover {
            border: 1px solid var(--lime);
            z-index: 2;

            h3 {
                color: var(--lime);
            }
        }

        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;

            .modal-content {
                background: var(--background);
                border-radius: 8px;
                padding: 20px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                overflow-y: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                flex-direction: column;
                overflow: hidden;

                input {
                    width: 25rem;
                    font-size: 0.8rem;
                    background: var(--background);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 5px;
                    padding: 1rem;
                    color: var(--white);
                    margin-bottom: 0.5rem;
                    outline: none;
                }

                textarea, p {
                    background: var(--background);
                    border: none;
                    background: #0d1117;
                    border-radius: 5px;
                    padding: 1rem;
                    color: var(--white);
                    resize: none;
                    outline: none;
                }

                p {
                    text-align: left;
                    margin-top: 1rem;
                }

                button {
                    font-size: 14px;
                    padding: 10px 20px;
                    color: var(--white);
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    outline: none;
                    transition: background-color 0.3s ease;
                    margin-top: 1rem;
                    font-weight: bold;
                }

                .date {
                    margin-bottom: 1rem;
                }

                .markdown {
                    overflow: hidden;
                    color: var(--white);
                    
                    textarea {
                        -webkit-text-fill-color: #fff;
                        background: var(--background);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        height: 15rem;
                    }

                    .w-md-editor-content {
                        width: 27rem;
                    }

                    .w-md-editor {
                        background: var(--background);
                    }

                    .markdown-preview-card {
                        height: 30rem;

                        .wmde-markdown {
                            background: var(--background-alt);
                            border-radius: 10px;
                            padding: 1rem;
                        }

                        .w-md-editor-content {
                            height: 70rem;
                        }

                        * {
                            background: transparent;
                        }
                    }

                    .w-md-editor-toolbar, .w-md-editor-bar {
                        display: none;
                    }

                    .w-md-editor-area {
                        height: 15rem;
                        overflow: hidden;
                    }
                }

                .markdown-preview {
                    overflow: hidden;
                    color: var(--white);
                    width: 70rem;
                    
                    textarea {
                        -webkit-text-fill-color: #fff;
                        background: var(--background);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        height: 27rem;
                    }

                    .w-md-editor-text-input {
                        font-family: 'Poppins', sans-serif;
                        height: 30rem;
                    }

                    .markdown-preview-card {
                        height: 30rem;

                        .wmde-markdown {
                            background: var(--background-alt);
                            border-radius: 10px;
                            padding: 1rem;
                        }

                        .w-md-editor-content {
                            height: 70rem;
                        }

                        * {
                            background: transparent;
                        }
                    }

                    .w-md-editor-toolbar, .w-md-editor-bar {
                        display: none;
                    }

                    .w-md-editor-area {
                        height: 15rem;
                        overflow: hidden;
                    }
                }

                .markdown-edit {
                    position: relative;
                    margin-top: -4rem;
                }

                .buttons {
                    .btnSave {
                        background: var(--green);
                        margin-right: 1rem;
                    }

                    .btnMarkdown {
                        background: var(--green);
                    }

                    .btnCancel {
                        background: var(--orange);
                    }

                    .btnDelete {
                        margin: 0 1rem;
                        background: var(--red);
                    }
                }
            }
        }

        .modal-close {
            position: absolute;
            top: 30px;
            right: 30px;
            cursor: pointer;
            font-size: 2rem;
        }
    }

    .addBtn {
            position: fixed;
            width: 60px;
            height: 60px;
            border-radius: 30px;
            border: none;
            color: var(--white);
            z-index: 20;
            font-size: 1.7rem;
            cursor: pointer;
            transition: 1s;

            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .addBtn:hover {
            filter: brightness(70%)
        }

        .addBtn {
            right: 30px;
            bottom: 30px;
            background: var(--green);
        }
`

export default HomeDetails