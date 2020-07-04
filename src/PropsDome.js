// import React, { Component } from 'react';

// class propsdome extends Component {
//     render() {
//         return (
//             <div>
//                {this.props.title }
//             </div>
//         );
//     }
// }

// export default propsdome;
import React from 'react';

function propsdome(props) {
    return (
        <div>
            {props.title}
        </div>
    );
}

export default propsdome;