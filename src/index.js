import babel from 'broccoli-babel-transpiler';

export default {
  build(tree) {
    return babel(tree);
  },
};
