import React from 'react'
import logo from '../logo.svg'

export default () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#ffffff', justifyContent: 'space-between', width: 550, }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "#FFFFFF",
                    width: 500,
                    height: 400,
                }}
            >

                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <img src={logo} alt="Logo" style={{ width: 150, height: 150 }} />
                    <div style={styles.fontValueStyle}>
                        Jessica Potter
                    </div>
                    <div style={styles.fontDescriptionStyle}>
                        Visual Artist
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 30 }}>
                    <button className="button" style={styles.buttonStyle}>
                        <div style={styles.fontValueStyle}>
                            Follow
                        </div>
                    </button>
                    <button className="button" style={{ ...styles.buttonStyle, marginTop: 10 }}>
                        <div style={styles.fontValueStyle}>
                            Message
                        </div>
                    </button>
                </div>


            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={styles.rightPanelStyle}>
                    <div style={styles.fontValueStyle}>
                        523
                    </div>
                    <div style={styles.fontDescriptionStyle}>
                        Posts
                    </div>

                </div>
                <div style={{...styles.rightPanelStyle, marginTop: 1}}>
                    <div style={styles.fontValueStyle}>
                        1387
                    </div>
                    <div style={styles.fontDescriptionStyle}>
                        Likes
                    </div>
                </div>
                <div style={{...styles.rightPanelStyle, marginTop: 1}}>
                    <div style={styles.fontValueStyle}>
                        146
                    </div>
                    <div style={styles.fontDescriptionStyle}>
                        follower
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    fontDescriptionStyle: {
        color: '#C4B7AE'
    },
    fontValueStyle: {
        fontWeight: 'bold',
        color: '#8D7F72',
    },
    buttonStyle: {
        display: 'flex',
        width: 200,
        borderRadius: 20,
        borderColor: '#A4A29C',
        borderWidth: 1
    },
    rightPanelStyle: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#F5E8DF",
        width: 200,
        height: '100%',
    }
}