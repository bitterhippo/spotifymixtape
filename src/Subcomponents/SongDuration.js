import React from 'react';

const SongDuration = props => {
  return (
    <div style={styles.container}>
      <div style={styles.item}>
        0:00
      </div>
      <div style={styles.item}>
        3:14
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    position: 'absolute',
    marginLeft: 20,
    maringRight: 30,
    bottom: '34%',
    flexDirection: 'inline-flex',
    justifyContent: 'space-between',
    width: '90%'
  },
  item: {
    fontSize: 12,
    color: 'grey',
    marginLeft: 3,
    marginRight: 2
  }
}

export default SongDuration;