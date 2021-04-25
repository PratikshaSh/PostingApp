module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        //all structure for our table
        //fields/columns
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    return Posts
}