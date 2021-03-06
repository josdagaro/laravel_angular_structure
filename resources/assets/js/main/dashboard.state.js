export const dashboardState = {
    name: 'dashboard',
    redirectTo: 'home',
    component: 'dashboardComponent'
};

export const homeState = {
    parent: 'dashboard',
    name: 'home',
    url: '/',
    component: 'homeComponent'
};

export const loginState = {
    name: 'login',
    url: '/login',
    component: 'login',
    resolve: {returnTo: returnTo}
};

function returnTo($transition$) {
    if($transition$.redirectedFrom() !== null)
        return $transition$.redirectedFrom().targetState();

    let $state = $transition$.router.stateService;

    if($transition$.from().name != '')
        return $state.target($transition$.from(), $transition$.params('from'));

    return $state.target('home');
}
