import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/clublist', {
  name: 'List_Clubs',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Clubs' });
  },
});

FlowRouter.route('/search', {
  name: 'Search_Clubs',
  action() {
    BlazeLayout.render('App_Body', { main: 'Search_Clubs' });
  },
});

FlowRouter.route('/manage', {
  name: 'Manage_Clubs',
  action() {
    BlazeLayout.render('App_Body', { main: 'Manage_Clubs' });
  },
});

FlowRouter.route('/create', {
  name: 'Create_Club',
  action() {
    BlazeLayout.render('App_Body', { main: 'Create_Club' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
