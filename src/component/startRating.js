import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {

    const [value, setValue] = React.useState(2);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col1">
                        <h4>Rating Customer</h4>
                        <Box component="fieldset" borderColor="transparent">
                            <Typography component="legend">silahkan beri rating setelah penutupan tiket</Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>

                        <form>
                            <div class="form">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" cols="100"></textarea>
                            </div>
                        </form>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">send feedback</button>
                        </div>
                    </div>
                    <table className="table">
                        <thead className="thead bg-warning">
                            <tr>
                                <th scope="col">Customer ID</th>
                                <th scope="col">CS ID</th>
                                <th scope="col" >Nama CS</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>1</td>
                                <td>Mark</td>
                                <td>****</td>
                                <td>Lorem ipsum dolor sit amet</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>****</td>
                                <td>Lorem ipsum dolor sit amet</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>3</td>
                                <td>Larry</td>
                                <td>*****</td>
                                <td>Lorem ipsum dolor sit amet</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}