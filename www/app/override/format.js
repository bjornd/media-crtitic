Ext.define('MC.override.Format', {
    requires: ['Ext.util.Format']
}, function(){
    Ext.apply(Ext.util.Format, {
        scorePointsClass: function(score){
            if (score >= 75) {
                return 'x-score-favorable';
            } else if (score >= 50) {
                return 'x-score-mixed';
            } else {
                return 'x-score-unfavorable';
            }
        },
        userScorePointsClass: function(score){
            if (score >= 7.5) {
                return 'x-score-favorable';
            } else if (score >= 5) {
                return 'x-score-mixed';
            } else {
                return 'x-score-unfavorable';
            }
        }
    });
});