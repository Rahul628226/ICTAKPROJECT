import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/material';

const Index = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [comment, setComment] = useState('');
    const [commentError, setCommentError] = useState('');

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const handleCommentSubmit = async () => {
        const response = await fetch('http://localhost:4010/api/add-comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comments: comment,
                pageNumber: currentPage,
            }),
        });

        if (response.ok) {


            setComment('');
        } else {
            console.error('Error adding comment');
        }

        if (comment === '') {
            alert("Please add your comment");
        }
        // Clear the error message if comment is provided
        setCommentError('');
    };


    const renderPageContent = () => {
        switch (currentPage) {
            case 1:
                return (
                    <div>
                        <h1>Information and Communication Technology Academy of Kerala</h1>
                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                            Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. The project of setting up the Academy was initiated by Ministry of Information and Communications Technology, Government of India. Even though the proposal for setting up such an Academy was given formal approval in 2008, due to indecisiveness in choosing the implementing agency, the project continued to remain on paper. In December 2013, Government of Kerala appointed S.D. Shibulal, chief executive officer and managing director of Infosys, as the Chairman of the Board of Governors of the Academy. The Board of Director of ICT Academy of Kerala appoint Mr.Santhosh Kurup as the Chief Executive Officer. He joined on 14 March 2014. The Registered office of ICT Academy of Kerala is at Thejaswini Building, Technopark Campus, Karyavattom, Trivandrum.Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. The project of setting up the Academy was initiated by Ministry of Information and Communications Technology, Government of India. Even though the proposal for setting up such an Academy was given formal approval in 2008, due to indecisiveness in choosing the implementing agency, the project continued to remain on paper. In December 2013, Government of Kerala appointed S.D. Shibulal, chief executive officer and managing director of Infosys, as the Chairman of the Board of Governors of the Academy. The Board of Director of ICT Academy of Kerala appoint Mr.Santhosh Kurup as the Chief Executive Officer. He joined on 14 March 2014. The Registered office of ICT Academy of Kerala is at Thejaswini Building, Technopark Campus, Karyavattom, Trivandrum.Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. The project of setting up the Academy was initiated by Ministry of Information and Communications Technology, Government of India. Even though the proposal for setting up such an Academy was given formal approval in 2008, due to indecisiveness in choosing the implementing agency, the project continued to remain on paper. In December 2013, Government of Kerala appointed S.D. Shibulal, chief executive officer and managing director of Infosys, as the Chairman of the Board of Governors of the Academy. The Board of Director of ICT Academy of Kerala appoint Mr.Santhosh Kurup as the Chief Executive Officer. He joined on 14 March 2014. The Registered office of ICT Academy of Kerala is at Thejaswini Building, Technopark Campus, Karyavattom, Trivandrum.Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. The project of setting up the Academy was initiated by Ministry of Information and Communications Technology, Government of India. Even though the proposal for setting up such an Academy was given formal approval in 2008, due to indecisiveness in choosing the implementing agency, the project continued to remain on paper. In December 2013, Government of Kerala appointed S.D. Shibulal, chief executive officer and managing director of Infosys, as the Chairman of the Board of Governors of the Academy. The Board of Director of ICT Academy of Kerala appoint Mr.Santhosh Kurup as the Chief Executive Officer. He joined on 14 March 2014. The Registered office of ICT Academy of Kerala is at Thejaswini Building, Technopark Campus, Karyavattom, Trivandrum.Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. The project of setting up the Academy was initiated by Ministry of Information and Communications Technology, Government of India. Even though the proposal for setting up such an Academy was given formal approval in 2008, due to indecisiveness in choosing the implementing agency, the project continued to remain on paper. In December 2013, Government of Kerala appointed S.D. Shibulal, chief executive officer and managing director of Infosys, as the Chairman of the Board of Governors of the Academy. The Board of Director of ICT Academy of Kerala appoint Mr.Santhosh Kurup as the Chief Executive Officer. He joined on 14 March 2014. The Registered office of ICT Academy of Kerala is at Thejaswini Building, Technopark Campus, Karyavattom, Trivandrum.Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. The project of setting up the Academy was initiated by Ministry of Information and Communications Technology, Government of India. Even though the proposal for setting up such an Academy was given formal approval in 2008, due to indecisiveness in choosing the implementing agency, the project continued to remain on paper. In December 2013, Government of Kerala appointed S.D. Shibulal, chief executive officer and managing director of Infosys, as the Chairman of the Board of Governors of the Academy. The Board of Director of ICT Academy of Kerala appoint Mr.Santhosh Kurup as the Chief Executive Officer. He joined on 14 March 2014. The Registered office of ICT Academy of Kerala is at Thejaswini Building, Technopark Campus, Karyavattom, Trivandrum.Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. The project of setting up the Academy was initiated by Ministry of Information and Communications Technology, Government of India. Even though the proposal for setting up such an Academy was given formal approval in 2008, due to indecisiveness in choosing the implementing agency, the project continued to remain on paper. In December 2013, Government of Kerala appointed S.D. Shibulal, chief executive officer and managing director of Infosys, as the Chairman of the Board of Governors of the Academy. The Board of Director of ICT Academy of Kerala appoint Mr.Santhosh Kurup as the Chief Executive Officer. He joined on 14 March 2014. The Registered office of ICT Academy of Kerala is at Thejaswini Building, Technopark Campus, Karyavattom, Trivandrum.Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. The project of setting up the Academy was initiated by Ministry of Information and Communications Technology, Government of India. Even though the proposal for setting up such an Academy was given formal approval in 2008, due to indecisiveness in choosing the implementing agency, the project continued to remain on paper. In December 2013, Government of Kerala appointed S.D. Shibulal, chief executive officer and managing director of Infosys, as the Chairman of the Board of Governors of the Academy. The Board of Director of ICT Academy of Kerala appoint Mr.Santhosh Kurup as the Chief Executive Officer. He joined on 14 March 2014. The Registered office of ICT Academy of Kerala is at Thejaswini Building, Technopark Campus, Karyavattom, Trivandrum.Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. The project of setting up the Academy was initiated by Ministry of Information and Communications Technology, Government of India. Even though the proposal for setting up such an Academy was given formal approval in 2008, due to indecisiveness in choosing the implementing agency, the project continued to remain on paper. In December 2013, Government of Kerala appointed S.D. Shibulal, chief executive officer and managing director of Infosys, as the Chairman of the Board of Governors of the Academy. The Board of Director of ICT Academy of Kerala appoint Mr.Santhosh Kurup as the Chief Executive Officer. He joined on 14 March 2014. The Registered office of ICT Academy of Kerala is at Thejaswini Building, Technopark Campus, Karyavattom, Trivandrum.Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. The project of setting up the Academy was initiated by Ministry of Information and Communications Technology, Government of India. Even though the proposal for setting up such an Academy was given formal approval in 2008, due to indecisiveness in choosing the implementing agency, the project continued to remain on paper. In December 2013, Government of Kerala appointed S.D. Shibulal, chief executive officer and managing director of Infosys, as the Chairman of the Board of Governors of the Academy. The Board of Director of ICT Academy of Kerala appoint Mr.Santhosh Kurup as the Chief Executive Officer. He joined on 14 March 2014. The Registered office of ICT Academy of Kerala is at Thejaswini Building, Technopark Campus, Karyavattom, Trivandrum.Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. The project of setting up the Academy was initiated by Ministry of Information and Communications Technology, Government of India. Even though the proposal for setting up such an Academy was given formal approval in 2008, due to indecisiveness in choosing the implementing agency, the project continued to remain on paper. In December 2013, Government of Kerala appointed S.D. Shibulal, chief executive officer and managing director of Infosys, as the Chairman of the Board of Governors of the Academy. The Board of Director of ICT Academy of Kerala appoint Mr.Santhosh Kurup as the Chief Executive Officer. He joined on 14 March 2014. The Registered office of ICT Academy of Kerala is at Thejaswini Building, Technopark Campus, Karyavattom, Trivandrum. Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. The project of setting up the Academy was initiated by Ministry of Information and Communications Technology, Government of India. Even though the proposal for setting up such an Academy was given formal approval in 2008, due to indecisiveness in choosing the implementing agency, the project continued to remain on paper. In December 2013, Government of Kerala appointed S.D. Shibulal, chief executive officer and managing director of Infosys, as the Chairman of the Board of Governors of the Academy. The Board of Director of ICT Academy of Kerala appoint Mr.Santhosh Kurup as the Chief Executive Officer. He joined on 14 March 2014. The Registered office of ICT Academy of Kerala is at Thejaswini Building, Technopark Campus, Karyavattom, Trivandrum.
                        </p>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                            ICT Academy was officially inaugurated by Chief Minister of Kerala Mr. Oommen Chandy on 24 June 2014 at a function held in Thiruvananthapuram in the presence of Education Minister P.K. Abdu Rabb, Additional Chief Secretary V. Somasundaram, and Higher Education Principal Secretary K.M. Abraham.
                        </p>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                            Information and Communication Technology Academy of Kerala (ICTAK) is a social enterprise created in a Public-Private Partnership (PPP) model. The organization is committed to imparting ICT skills to the youths of Kerala and thereby improving their employability opportunities in the industry. ICTAK gets support from the Government of India, the Government of Kerala, and the leading IT companies such as TCS, UST, IBS, QuEST, and Sowparnika Education Infrastructure.
                        </p>
                    </div>
                );
            default:
                return <h1>No content available for this page.</h1>;
        }
    };

    return (
        <Grid container style={{ padding: '50px' }}>
            <Grid item xs={12} md={8}>
                <Card style={{ width: '920px', height: '600px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                        <CardContent style={{ overflowY: 'auto' }}>
                            {renderPageContent()}
                        </CardContent>
                        <div style={{ display: 'flex', marginTop: 'auto' }}>
                            <Button onClick={() => handlePageChange(1)}>1</Button>
                            <Button onClick={() => handlePageChange(2)}>2</Button>
                            <Button onClick={() => handlePageChange(3)}>3</Button>
                        </div>
                    </div>
                </Card>

            </Grid>
            <Grid item xs={12} md={4} style={{ paddingLeft: '20px' }}>
                <Card>
                    <CardContent>
                        <h1 hidden>comments for Page {currentPage}</h1>

                        <TextareaAutosize
                            minRows={3}
                            maxRows={6}
                            placeholder="Enter your comments"
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                            style={{ width: '80%', borderRadius: '10px', padding: '10px' }}
                        />
                        {commentError && (
                            <p style={{ color: 'red', marginTop: '5px' }}>{commentError}</p>
                        )}
                        <div style={{ paddingTop: '10px', paddingLeft: '290px' }}>
                            <Button variant='contained' onClick={handleCommentSubmit}>
                                Submit
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Index;
