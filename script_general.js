(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    return i(g);
    function i(p, q) {
        switch (p) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['startsWith']('photo'))
                        x = this['getByClassName']('PhotoPlayList');
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var B = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (B) {
                            w = B[0x1];
                            switch ('quiz.' + B[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var C = this['get']('data')['quiz'];
                        if (C) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var E = this['get']('data')['quizConfig'];
                                        var G = E['objectives'];
                                        for (var I = 0x0, K = G['length']; I < K; ++I) {
                                            C['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, G[I]['id'], s), this);
                                        }
                                    } else {
                                        C['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    C['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var L = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var E = this['get']('data')['quizConfig'];
                                        var G = E['objectives'];
                                        for (var I = 0x0, K = G['length']; I < K; ++I) {
                                            L += C['getObjective'](G[I]['id'], s);
                                        }
                                    } else {
                                        L = C['getObjective'](w, s);
                                    }
                                } else {
                                    L = C['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        L += 0x1;
                                }
                                return L;
                            } catch (M) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var N = this['get']('data');
        N['updateText'](N['translateObjs'][f]);
    }
    function k(O) {
        var P = O['data']['nextSelectedIndex'];
        if (P >= 0x0) {
            var Q = O['source']['get']('items')[P];
            var R = function () {
                Q['unbind']('begin', R, this);
                j['call'](this);
            };
            Q['bind']('begin', R, this);
        }
    }
    function l(S) {
        return function (T) {
            if (S in T) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(U, V) {
        return function (W, X) {
            if (U == W && V in X) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(Y, Z, a0) {
        for (var a1 = 0x0; a1 < Y['length']; ++a1) {
            var a2 = Y[a1];
            var a3 = a2['get']('selectedIndex');
            if (a3 >= 0x0) {
                var a4 = Z['split']('.');
                var a5 = a2['get']('items')[a3];
                if (a0 !== undefined && !a0['call'](this, a5))
                    continue;
                for (var a6 = 0x0; a6 < a4['length']; ++a6) {
                    if (a5 == undefined)
                        return '';
                    a5 = 'get' in a5 ? a5['get'](a4[a6]) : a5[a4[a6]];
                }
                return a5;
            }
        }
        return '';
    }
    function o(a7, a8) {
        var a9 = a8['get']('player');
        return a9 !== undefined && a9['get']('viewerArea') == a7;
    }
}
var script = {"scripts":{"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showWindow":TDV.Tour.Script.showWindow,"quizShowScore":TDV.Tour.Script.quizShowScore,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizFinish":TDV.Tour.Script.quizFinish,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"createTween":TDV.Tour.Script.createTween,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"textToSpeech":TDV.Tour.Script.textToSpeech,"init":TDV.Tour.Script.init,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"existsKey":TDV.Tour.Script.existsKey,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setLocale":TDV.Tour.Script.setLocale,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"translate":TDV.Tour.Script.translate,"shareSocial":TDV.Tour.Script.shareSocial,"setValue":TDV.Tour.Script.setValue,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"initQuiz":TDV.Tour.Script.initQuiz,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"downloadFile":TDV.Tour.Script.downloadFile,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"clone":TDV.Tour.Script.clone,"initAnalytics":TDV.Tour.Script.initAnalytics,"playAudioList":TDV.Tour.Script.playAudioList,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"unregisterKey":TDV.Tour.Script.unregisterKey,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"mixObject":TDV.Tour.Script.mixObject,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startMeasurement":TDV.Tour.Script.startMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMapLocation":TDV.Tour.Script.setMapLocation,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getOverlays":TDV.Tour.Script.getOverlays,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getKey":TDV.Tour.Script.getKey,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"openLink":TDV.Tour.Script.openLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeJS":TDV.Tour.Script.executeJS,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"registerKey":TDV.Tour.Script.registerKey,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPixels":TDV.Tour.Script.getPixels,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"isPanorama":TDV.Tour.Script.isPanorama,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce},"start":"this.init()","data":{"locales":{"en":"locale/en.txt"},"defaultLocale":"en","history":{},"name":"Player77928","textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"pitch":1}},"id":"rootPlayer","class":"Player","scrollBarMargin":2,"layout":"absolute","minHeight":0,"propagateClick":false,"minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","gap":10,"backgroundColor":["#FFFFFF"],"watermark":false,"hash": "c5f4f43efc663a33fe2ef777d06579e2f593c0517bab4297e5713d6ecdc366e7", "definitions": [{"class":"PlayList","id":"mainPlayList","items":[{"end":"this.trigger('tourEnded')","player":"this.MainViewerModel3DPlayer","class":"Model3DPlayListItem","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","media":"this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61"}]},{"subtitlesTextShadowColor":"#000000","id":"MainViewer","subtitlesTextShadowHorizontalLength":1,"subtitlesTop":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundOpacity":1,"data":{"name":"Main Viewer"},"progressBarBorderColor":"#000000","propagateClick":false,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","subtitlesFontSize":"3vmin","progressBarBorderRadius":2,"minHeight":50,"progressBorderRadius":2,"minWidth":100,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingBottom":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"firstTransitionDuration":0,"vrPointerSelectionColor":"#FF6600","progressBarBackgroundColorRatios":[0],"progressBackgroundColor":["#000000"],"subtitlesFontFamily":"Arial","toolTipShadowColor":"#333138","playbackBarHeadShadowBlurRadius":3,"progressLeft":"33%","playbackBarHeadShadowOpacity":0.7,"toolTipTextShadowColor":"#000000","progressBackgroundColorRatios":[0],"progressRight":"33%","progressBarBorderSize":0,"playbackBarBottom":5,"vrPointerSelectionTime":2000,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarLeft":0,"playbackBarBackgroundColor":["#FFFFFF"],"width":"100%","playbackBarHeadHeight":15,"height":"100%","subtitlesTextShadowOpacity":1,"playbackBarHeight":10,"playbackBarHeadShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"class":"ViewerArea","toolTipPaddingTop":4,"toolTipFontColor":"#606060","progressOpacity":0.7,"progressBorderColor":"#000000","playbackBarHeadWidth":6,"playbackBarHeadBorderSize":0,"playbackBarProgressBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"horizontal","subtitlesBottom":50,"subtitlesTextShadowVerticalLength":1,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"vrPointerColor":"#FFFFFF","playbackBarBorderRadius":0,"toolTipFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","progressBottom":10,"toolTipPaddingRight":6,"progressHeight":2,"playbackBarHeadBorderRadius":0,"playbackBarRight":0,"playbackBarHeadBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"progressBorderSize":0,"playbackBarBorderSize":0,"toolTipPaddingLeft":6},{"class":"Model3DPlayer","id":"MainViewerModel3DPlayer","viewerArea":"this.MainViewer"},{"surfaceReticleMinRadius":15,"id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61","label":trans('model_162FD548_0CEC_3250_41B9_4948CF1E6C61.label'),"model":"this.res_166C9795_0CEC_3EF0_41C1_6F14970C3189","floorRadius":11.25,"surfaceReticleMaxRadius":50,"thumbnailUrl":"media/model_162FD548_0CEC_3250_41B9_4948CF1E6C61_t.jpg","surfaceReticleRadius":0.02,"class":"Model3D","data":{"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"label":"R S Truck All lights On Bright"},"environmentIntensity":0.5,"castShadow":true,"objects":["this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_2","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_3","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_4","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_5","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_6","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_7","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_8","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_9","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_10","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_11","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_12","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_13","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_14","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_15","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_16","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_17","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_18","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_19","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_20","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_21","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_22","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_23","this.model_162FD548_0CEC_3250_41B9_4948CF1E6C61_24","this.sprite_157EAA8C_0CE4_36D0_41BC_FF2543A15134","this.sprite_6B91F72F_0CE4_1FD0_41C4_C28098CB2B18","this.sprite_6A63D5FA_0CE4_3230_41A6_B14FA55FB28D","this.sprite_68F4F086_0CE4_12D0_41C1_CB77C1D6D7B3","this.sprite_6F04ADFC_0CE4_1230_41C3_B3B1A6467D06","this.sprite_6DB5F383_0CE4_36D0_41B0_67EDC68AF33E","this.sprite_14C82EFE_0CE4_0E30_41BB_780C788F49A7","this.sprite_6AF4BDD2_0CE4_7270_41C1_767E3607281D","this.sprite_68988792_0CE7_FEF0_41C2_353D5B1C8134"],"backgroundColor":"#333333","surfaceSelectionCoef":2,"camera":"this.cam_16631795_0CEC_3EF0_41B1_A9D0F4D934B7","floorColor":"#FFFFFF","lights":["this.light_1663B795_0CEC_3EF0_41B3_52CE21DC611F","this.light_16629796_0CEC_3EF0_4185_9008A1353774","this.light_14A6C9E0_0CE4_7250_4155_D0331373CEF0"]},{"class":"Model3DResource","id":"res_166C9795_0CEC_3EF0_41C1_6F14970C3189","levels":[{"class":"Model3DResourceLevel","url":"media/model_162FD548_0CEC_3250_41B9_4948CF1E6C61/scene.glb"},{"class":"Model3DResourceLevel","tags":"mobile","url":"media/model_162FD548_0CEC_3250_41B9_4948CF1E6C61/scene_mobile.glb"}]},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"25","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_2","data":{"label":"Mesh"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"26","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_3","data":{"label":"Mesh.001"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"27","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_4","data":{"label":"Mesh.002"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"28","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_5","data":{"label":"Mesh.003"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"29","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_6","data":{"label":"Mesh.004"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"30","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_7","data":{"label":"Mesh.005"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"31","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_8","data":{"label":"Mesh.006"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"32","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_9","data":{"label":"Sphere"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"33","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_10","data":{"label":"Sphere.001"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"34","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_11","data":{"label":"Sphere.003"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"35","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_12","data":{"label":"Sphere.004"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"36","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_13","data":{"label":"Sphere.005"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"37","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_14","data":{"label":"Sphere.007"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"38","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_15","data":{"label":"Cube.001"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"39","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_16","data":{"label":"Sphere.002"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"40","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_17","data":{"label":"Sphere.006"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"41","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_18","data":{"label":"Sphere.008"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"42","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_19","data":{"label":"Sphere.009"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"43","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_20","data":{"label":"Sphere.010"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"44","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_21","data":{"label":"Sphere.011"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"45","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_22","data":{"label":"Sphere.012"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"46","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_23","data":{"label":"Sphere.013"}},{"rollOverEnabled":false,"clickEnabled":false,"objectId":"47","class":"InnerModel3DObject","id":"model_162FD548_0CEC_3250_41B9_4948CF1E6C61_24","data":{"label":"Sphere.014"}},{"class":"SpriteModel3DObject","data":{"label":"20"},"x":117.53836822509768,"y":126.6392164304581,"translationLength":3,"z":288.48613529096207,"image":"this.res_4F49507D_4264_E327_41C5_970EF4D6545A","parentId":"25","translationX":1,"width":32,"height":38,"id":"sprite_157EAA8C_0CE4_36D0_41BC_FF2543A15134"},{"class":"SpriteModel3DObject","data":{"label":"20"},"x":119.6124420166016,"y":55.48865146494286,"translationLength":3,"z":-302.48074253289246,"image":"this.res_4F49507D_4264_E327_41C5_970EF4D6545A","parentId":"25","translationX":1,"width":32,"height":38,"id":"sprite_6B91F72F_0CE4_1FD0_41C4_C28098CB2B18"},{"class":"SpriteModel3DObject","data":{"label":"20"},"x":18.917617797851577,"y":0.43205115323244314,"translationLength":3,"z":0.22645775832614845,"image":"this.res_4F49507D_4264_E327_41C5_970EF4D6545A","parentId":"26","translationX":1,"width":32,"height":38,"id":"sprite_6A63D5FA_0CE4_3230_41A6_B14FA55FB28D"},{"class":"SpriteModel3DObject","data":{"label":"20"},"x":18.917617797851477,"y":-1.5046803411724667,"translationLength":3,"z":-0.16625733317624736,"image":"this.res_4F49507D_4264_E327_41C5_970EF4D6545A","parentId":"29","translationX":1,"width":32,"height":38,"id":"sprite_68F4F086_0CE4_12D0_41C1_CB77C1D6D7B3"},{"class":"SpriteModel3DObject","data":{"label":"20"},"x":112.1972808837892,"y":71.51960969039051,"translationLength":3,"z":20.139327311001853,"image":"this.res_4F49507D_4264_E327_41C5_970EF4D6545A","parentId":"25","translationX":1,"width":32,"height":38,"id":"sprite_6F04ADFC_0CE4_1230_41C3_B3B1A6467D06"},{"class":"SpriteModel3DObject","data":{"label":"20"},"x":121.7046643561886,"y":80.12094014735614,"translationLength":3,"z":102.98920253099814,"image":"this.res_4F49507D_4264_E327_41C5_970EF4D6545A","parentId":"25","translationX":0.96,"translationY":0.28,"width":32,"height":38,"id":"sprite_6DB5F383_0CE4_36D0_41B0_67EDC68AF33E"},{"class":"SpriteModel3DObject","data":{"label":"20"},"x":123.74026489257804,"y":126.90587669219572,"translationLength":3,"z":154.7142774605696,"image":"this.res_4F49507D_4264_E327_41C5_970EF4D6545A","parentId":"25","translationX":1,"width":32,"height":38,"id":"sprite_14C82EFE_0CE4_0E30_41BB_780C788F49A7"},{"class":"SpriteModel3DObject","data":{"label":"20"},"x":15.744781494140526,"y":1.8205146558523568,"translationLength":3,"z":0.1850088710287423,"image":"this.res_4F49507D_4264_E327_41C5_970EF4D6545A","parentId":"30","translationX":1,"width":32,"height":38,"id":"sprite_6AF4BDD2_0CE4_7270_41C1_767E3607281D"},{"class":"SpriteModel3DObject","data":{"label":"20"},"x":124.56462097167984,"y":308.6149725204304,"translationLength":3,"z":109.05516511212802,"image":"this.res_4F49507D_4264_E327_41C5_970EF4D6545A","parentId":"25","translationX":1,"width":32,"height":38,"id":"sprite_68988792_0CE7_FEF0_41C2_353D5B1C8134"},{"maxY":13.22,"initialY":1.88,"minZ":-24.85,"autoNearFar":true,"class":"OrbitModel3DCamera","maxZ":23.98,"maxPitch":-1.79,"maxDistance":8,"initialPitch":-30,"minDistance":3.34,"initialZ":-0.43,"initialDistance":13.37,"minPitch":-1.74,"minX":-8.84,"maxX":8.85,"id":"cam_16631795_0CEC_3EF0_41B1_A9D0F4D934B7","minY":-9.45},{"shadowTolerance":2,"castShadow":true,"pitch":45,"yaw":-45,"intensity":0.5,"class":"OrbitLight","id":"light_1663B795_0CEC_3EF0_41B3_52CE21DC611F"},{"shadowTolerance":2,"castShadow":true,"mode":"fixed_to_camera","pitch":75,"yaw":135,"intensity":0.3,"class":"OrbitLight","id":"light_16629796_0CEC_3EF0_4185_9008A1353774"},{"class":"AmbientLight","id":"light_14A6C9E0_0CE4_7250_4155_D0331373CEF0","intensity":0.07},{"class":"ImageResource","id":"res_4F49507D_4264_E327_41C5_970EF4D6545A","levels":[{"height":38,"width":32,"class":"ImageResourceLevel","url":"media/res_4F49507D_4264_E327_41C5_970EF4D6545A_0.png"}]}],"width":"100%","children":["this.MainViewer"],"height":"100%","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var aa = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return aa;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.21.js.map
})();
//Generated with v2022.2.21, Mon Jul 10 2023