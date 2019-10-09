import React from 'react'
import DeleteIcon from '@material-ui/icons/Star';

export default () => {
    return (
        <button style={styles.buttonStyle} onClick={() => console.log('hello')}>
            <div style={styles.layout}>
                <div style={styles.buttonContainer}>
                    <DeleteIcon style={{ marginLeft: 10}}/>
                    CHECKOUT
                    <DeleteIcon style={{ marginRight: 10}}/>
                </div>
            </div>
        </button>
    )
}

const styles = {
    buttonStyle: {
        width: 261,
        height: 60,
        backgroundColor: '#ffffff',
        border: '2px solid #666666',
        borderRadius: '15px',
        margin: 0,
        padding: 0,
    },
    buttonContainer: {
        color: '#575458',
        display: "flex",
        position: 'absolute',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 243,
        height: 44,
        background: 'linear-gradient(0deg, rgba(152,151,151,1) 0%, rgba(163,162,162,1) 48%, rgba(224,224,224,1) 100%)',
        fontSize: 25,
        fontFamily: 'arial, helvetica, sans-serif',
        fontWeight: 'bold',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)',
        border: '0.5px solid #919191',
        borderRadius: '7px',
        marginLeft: 5,
        marginTop: 4
    },
    layout: {
        backgroundColor: '#D7D9D8',
        width: 253,
        height: 52,
        borderRadius: '12px',
        marginLeft: 2,
        marginTop: 0,
        padding: 0,
    }
}