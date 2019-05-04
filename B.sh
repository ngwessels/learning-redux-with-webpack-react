#!/bin/bash


read -p 'What do you want to do? [add, commit]' command

case $command in

commit)
read -r -p 'Commit Message: ' commitMessage
echo "Git add ."
git add .
echo 'git commit -m "${commitMessage}"'
git commit -m '${commitMessage}'
echo 'pushing'
# get user name
username=ngwessels
if [ '' = '' ]; then
echo 'Could not find username, run "git config --global github.user <username>"'
invalid_credentials=1
fi
$username/$reponame.github
git push origin master
echo 'done'
;;

add)
read -r -p 'Component Name: ' Name
read -r -p 'Function or Class: ' type
foo=${Name}
echo "Creating $foo as type $type"
touch src/components/$Name.jsx
echo "git add ."
echo "git commit -m 'Add $Name as $type component in src/components'"
case $type in
Class)
echo "import React from 'react';

class ${foo} extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div> Hello World! </div>
    );
  }
}
export default ${foo};" >> src/components/$Name.jsx
;;

Function)
echo "import React from 'react';

function ${Name}() {
  return (
    <div> Hello World! </div>
  );
}
export default ${Name};" >> src/components/$Name.jsx
;;
*)
;;
esac
;;
*)
esac
