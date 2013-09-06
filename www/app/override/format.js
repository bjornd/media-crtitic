Ext.define('MC.override.Format', {
    requires: ['Ext.util.Format']
}, function(){
    Ext.apply(Ext.util.Format, {
        scorePointsClass: function(score){
            if (score >= 75) {
                return 'x-artice-score-points-favorable';
            } else if (score >= 50) {
                return 'x-artice-score-points-mixed';
            } else {
                return 'x-artice-score-points-unfavorable';
            }
        },
        userScorePointsClass: function(score){
            if (score >= 7.5) {
                return 'x-artice-score-points-favorable';
            } else if (score >= 5) {
                return 'x-artice-score-points-mixed';
            } else {
                return 'x-artice-score-points-unfavorable';
            }
        }
    });
});