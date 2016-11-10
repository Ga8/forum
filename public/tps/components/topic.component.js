const template = `

<p>we in</p>

    <comment comment="comment" ng-repeat="comment in $ctrl.topic.comments"> </comment>



    <form novalidate>
    <select ng-model="$ctrl.commentModel.user"
ng-options="user.name for item in $ctrl.users"></select>

    <p> user chosen : {{$ctrl.model.user.name}}</p>


<textarea ng-model="$ctrl.commentModel.content" required></textarea>
<button ng-click="$ctrl.createComment($ctrl.commentModel)"> Envoyer </button>

    </form>
`;

function showTopicController() {

}
        //should have : <show-topic topic="t"></show-topic>

angular.module('forum')
    .component('showTopic', {

        template,
        controller: showTopicController,
        bindings: {
            topic: '='
        }
    });