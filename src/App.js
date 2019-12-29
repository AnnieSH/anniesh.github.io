import React, { createRef } from 'react';
import logo from './logo.svg';
import Menu from './menu/menu';
import './App.css';

function App() {
  const homeRef = createRef();
  const projectsRef = createRef();
  const hobbyRef = createRef();

  return (
    <div className="App">
      <Menu homeRef={homeRef} projectsRef={projectsRef} hobbyRef={hobbyRef}></Menu>
      
      <div id='content'>
        <h2>🚧 Under construction 🚧</h2>

        <h1 ref={homeRef} id='home-header'></h1>
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Duis at tellus at urna condimentum. Urna et pharetra pharetra massa massa ultricies mi. Pellentesque dignissim enim sit amet. Habitasse platea dictumst quisque sagittis purus sit amet. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Eu scelerisque felis imperdiet proin fermentum. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Auctor urna nunc id cursus metus aliquam eleifend mi in. Semper risus in hendrerit gravida rutrum quisque non tellus. Ut diam quam nulla porttitor massa. Non sodales neque sodales ut. Nisi lacus sed viverra tellus in. Cursus vitae congue mauris rhoncus aenean vel elit. At tellus at urna condimentum mattis pellentesque id. Lacus sed viverra tellus in hac habitasse platea dictumst.

Ut porttitor leo a diam sollicitudin tempor id. Et malesuada fames ac turpis. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Pharetra diam sit amet nisl suscipit adipiscing. Pellentesque nec nam aliquam sem. Amet commodo nulla facilisi nullam vehicula ipsum. Leo vel orci porta non pulvinar neque laoreet suspendisse. Lectus sit amet est placerat in egestas. Aliquam eleifend mi in nulla. Fringilla ut morbi tincidunt augue interdum velit.

Amet justo donec enim diam. Id aliquet risus feugiat in ante metus dictum at. Gravida rutrum quisque non tellus orci ac auctor augue. Diam vulputate ut pharetra sit amet aliquam. Lacinia at quis risus sed vulputate odio ut. Eget lorem dolor sed viverra ipsum nunc aliquet. Est ultricies integer quis auctor elit. Non nisi est sit amet facilisis magna etiam. Ultricies leo integer malesuada nunc vel risus commodo. Arcu odio ut sem nulla pharetra. Enim ut sem viverra aliquet. Libero id faucibus nisl tincidunt eget. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Faucibus nisl tincidunt eget nullam non nisi est.

Tristique senectus et netus et malesuada fames ac. Amet aliquam id diam maecenas ultricies mi eget. Viverra nibh cras pulvinar mattis nunc. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Penatibus et magnis dis parturient montes. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Elit duis tristique sollicitudin nibh sit. Quis vel eros donec ac odio tempor orci dapibus. Quis risus sed vulputate odio ut enim blandit volutpat. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Gravida neque convallis a cras semper. Tortor pretium viverra suspendisse potenti nullam.

Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Donec ultrices tincidunt arcu non sodales. Velit laoreet id donec ultrices tincidunt arcu. Egestas sed sed risus pretium quam vulputate dignissim. Ac feugiat sed lectus vestibulum. Viverra ipsum nunc aliquet bibendum enim facilisis. Dignissim convallis aenean et tortor. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In cursus turpis massa tincidunt dui ut ornare. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Nulla pharetra diam sit amet nisl suscipit. Suspendisse potenti nullam ac tortor vitae purus. Porttitor massa id neque aliquam.

        <h1 ref={projectsRef} id='projects-header'>Projects</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Duis at tellus at urna condimentum. Urna et pharetra pharetra massa massa ultricies mi. Pellentesque dignissim enim sit amet. Habitasse platea dictumst quisque sagittis purus sit amet. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Eu scelerisque felis imperdiet proin fermentum. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Auctor urna nunc id cursus metus aliquam eleifend mi in. Semper risus in hendrerit gravida rutrum quisque non tellus. Ut diam quam nulla porttitor massa. Non sodales neque sodales ut. Nisi lacus sed viverra tellus in. Cursus vitae congue mauris rhoncus aenean vel elit. At tellus at urna condimentum mattis pellentesque id. Lacus sed viverra tellus in hac habitasse platea dictumst.

Ut porttitor leo a diam sollicitudin tempor id. Et malesuada fames ac turpis. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Pharetra diam sit amet nisl suscipit adipiscing. Pellentesque nec nam aliquam sem. Amet commodo nulla facilisi nullam vehicula ipsum. Leo vel orci porta non pulvinar neque laoreet suspendisse. Lectus sit amet est placerat in egestas. Aliquam eleifend mi in nulla. Fringilla ut morbi tincidunt augue interdum velit.

Amet justo donec enim diam. Id aliquet risus feugiat in ante metus dictum at. Gravida rutrum quisque non tellus orci ac auctor augue. Diam vulputate ut pharetra sit amet aliquam. Lacinia at quis risus sed vulputate odio ut. Eget lorem dolor sed viverra ipsum nunc aliquet. Est ultricies integer quis auctor elit. Non nisi est sit amet facilisis magna etiam. Ultricies leo integer malesuada nunc vel risus commodo. Arcu odio ut sem nulla pharetra. Enim ut sem viverra aliquet. Libero id faucibus nisl tincidunt eget. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Faucibus nisl tincidunt eget nullam non nisi est.

Tristique senectus et netus et malesuada fames ac. Amet aliquam id diam maecenas ultricies mi eget. Viverra nibh cras pulvinar mattis nunc. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Penatibus et magnis dis parturient montes. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Elit duis tristique sollicitudin nibh sit. Quis vel eros donec ac odio tempor orci dapibus. Quis risus sed vulputate odio ut enim blandit volutpat. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Gravida neque convallis a cras semper. Tortor pretium viverra suspendisse potenti nullam.

Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Donec ultrices tincidunt arcu non sodales. Velit laoreet id donec ultrices tincidunt arcu. Egestas sed sed risus pretium quam vulputate dignissim. Ac feugiat sed lectus vestibulum. Viverra ipsum nunc aliquet bibendum enim facilisis. Dignissim convallis aenean et tortor. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In cursus turpis massa tincidunt dui ut ornare. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Nulla pharetra diam sit amet nisl suscipit. Suspendisse potenti nullam ac tortor vitae purus. Porttitor massa id neque aliquam.

        <h1 ref={hobbyRef} id='hobby-header'>Hobbies</h1>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Duis at tellus at urna condimentum. Urna et pharetra pharetra massa massa ultricies mi. Pellentesque dignissim enim sit amet. Habitasse platea dictumst quisque sagittis purus sit amet. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Eu scelerisque felis imperdiet proin fermentum. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Auctor urna nunc id cursus metus aliquam eleifend mi in. Semper risus in hendrerit gravida rutrum quisque non tellus. Ut diam quam nulla porttitor massa. Non sodales neque sodales ut. Nisi lacus sed viverra tellus in. Cursus vitae congue mauris rhoncus aenean vel elit. At tellus at urna condimentum mattis pellentesque id. Lacus sed viverra tellus in hac habitasse platea dictumst.

Ut porttitor leo a diam sollicitudin tempor id. Et malesuada fames ac turpis. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Pharetra diam sit amet nisl suscipit adipiscing. Pellentesque nec nam aliquam sem. Amet commodo nulla facilisi nullam vehicula ipsum. Leo vel orci porta non pulvinar neque laoreet suspendisse. Lectus sit amet est placerat in egestas. Aliquam eleifend mi in nulla. Fringilla ut morbi tincidunt augue interdum velit.

Amet justo donec enim diam. Id aliquet risus feugiat in ante metus dictum at. Gravida rutrum quisque non tellus orci ac auctor augue. Diam vulputate ut pharetra sit amet aliquam. Lacinia at quis risus sed vulputate odio ut. Eget lorem dolor sed viverra ipsum nunc aliquet. Est ultricies integer quis auctor elit. Non nisi est sit amet facilisis magna etiam. Ultricies leo integer malesuada nunc vel risus commodo. Arcu odio ut sem nulla pharetra. Enim ut sem viverra aliquet. Libero id faucibus nisl tincidunt eget. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Faucibus nisl tincidunt eget nullam non nisi est.

Tristique senectus et netus et malesuada fames ac. Amet aliquam id diam maecenas ultricies mi eget. Viverra nibh cras pulvinar mattis nunc. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Penatibus et magnis dis parturient montes. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Elit duis tristique sollicitudin nibh sit. Quis vel eros donec ac odio tempor orci dapibus. Quis risus sed vulputate odio ut enim blandit volutpat. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Gravida neque convallis a cras semper. Tortor pretium viverra suspendisse potenti nullam.

Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Donec ultrices tincidunt arcu non sodales. Velit laoreet id donec ultrices tincidunt arcu. Egestas sed sed risus pretium quam vulputate dignissim. Ac feugiat sed lectus vestibulum. Viverra ipsum nunc aliquet bibendum enim facilisis. Dignissim convallis aenean et tortor. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In cursus turpis massa tincidunt dui ut ornare. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Nulla pharetra diam sit amet nisl suscipit. Suspendisse potenti nullam ac tortor vitae purus. Porttitor massa id neque aliquam.
      </div>
    </div>
  );
}

export default App;
