Ext.define('MC.override.Format', {
    requires: ['Ext.util.Format']
}, function(){
    Ext.apply(Ext.util.Format, {
        timePeriod: function(period){
            var re = /^P(?:(\d+Y)?(\d+M)?(\d+W)?(\d+D)?)?(?:T(\d+H)?(\d+M)?([.0-9]+S)?)?$/,
                periods = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'],
                parsed = Array.prototype.slice.call(re.exec(period), 1),
                result = [],
                num,
                i;

            for (i = 0; i < parsed.length; i++) {
                if (parsed[i]) {
                    num = parseFloat(parsed[i].substr(0, parsed[i].length - 1));
                    result.push(num + ' ' + periods[i] + (num == 1 ? '' : 's'))
                }
            }

            return result.slice(0, 2).join(' ');
        },
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
            if (score >= 7) {
                return 'x-score-favorable';
            } else if (score >= 5) {
                return 'x-score-mixed';
            } else {
                return 'x-score-unfavorable';
            }
        }
    });
});